import React from 'react';
import * as yup from 'yup'
import {
    Typography,
    TextField,
    Box,
    Button,
    Snackbar,
    Alert,
    Stack
} from '@mui/material'

import SendIcon from '@mui/icons-material/Send'
import { useQuery } from '@tanstack/react-query';
import { apiDataUserAddressByPin, apiDataUserByPin, apiDataUserPhotoByPin } from '../app/endpoints';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const CheckByPin = () => {
    const [openN, setOpenN] = React.useState(false)
    const navigate = useNavigate()
    const form = useForm({resolver: yupResolver(innShema)})
    const {register, formState: {errors}, handleSubmit} = form

    // const {data, refetch, error} = useQuery(['values'], async () => {
    //     if(value.length < 14) {
    //         return
    //     }

    //     setOpenN(true)
    //     const infoResp = await fetch(`${apiDataUserByPin}`, {
    //             method: 'POST',
    //             headers: {'Content-Type': 'application/json'},
    //             body: JSON.stringify(
    //                 {
    //                     pin: value,
    //                 }
    //             )
    //         }
    //     )
    //     return await infoResp.json()
    // })
    // console.log(error);
    
    // !error && navigate('/info-by-pin', {state: data})

    const onSubmit = async (formData: any) => {
        // refetch()
        const {inn} = formData
        
        try {
            setOpenN(true)

            const info = await fetch(apiDataUserByPin, {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({pin: inn}),
            });
            const infoResp = await info.json();

            const photo = await fetch(apiDataUserPhotoByPin, {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({pin: inn}),
            });
            const photoResp = await photo.json();

            const address = await fetch(apiDataUserAddressByPin, {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({pin: inn}),
            });
            const addressResp = await address.json();
            console.log(infoResp);
            
            infoResp && navigate('/info-by-pin', {state: {info: infoResp, photo: photoResp, address: addressResp}})
        } catch (e) {
            console.log(e);
        }
    }
    
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenN(false);
    };
    
    return (
        <Box sx={{margin: '80px 35%', textAlign: 'center', display: 'block'}}>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={openN} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                        Идет загрузка подождите!
                    </Alert>
                </Snackbar>
            </Stack>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography variant={"h4"} sx={{marginBottom: '20px'}}>
                    {'Поиск по ИНН'}
                </Typography>
                <TextField
                    id="outlined-basic"
                    label="ПИН/ИНН"
                    variant="outlined"
                    type="text"
                    placeholder={'Поиск по ИНН'}
                    {...register('inn')}
                    sx={{width: '400px'}}
                    //@ts-ignore
                    helperText={errors.inn?.message}
                    //@ts-ignore
                    error={errors?.inn}
                />
                <Button
                    variant="contained"
                    sx={{marginTop: "30px"}}
                    type="submit"
                    endIcon={<SendIcon/>}
                >
                    Проверить
                </Button>
            </form>
        </Box>
    );
};

export default CheckByPin;

const innRequired = yup.string()
  .matches(/^\d{14}$/, 'Поле не должно быть меньше 14 цифр!')
  .required()

const innShema = yup.object({
    inn: innRequired
}).defined()