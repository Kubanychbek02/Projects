import React from 'react';
import {object, string} from 'yup'
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
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const CheckByPlate = () => {
    const [openN, setOpenN] = React.useState(false)
    const form = useForm({resolver: yupResolver(numberShema)})
    const {register, handleSubmit, formState: {errors}} = form

    const onSubmit = (formData: any) => {
        setOpenN(true)
        console.log(formData);
    }
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenN(false);
    };
    
    return (
        <Box sx={{margin: '80px 35%', textAlign: 'center'}}>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={openN} autoHideDuration={4000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                        Идет загрузка подождите!
                    </Alert>
                </Snackbar>
            </Stack>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography variant={"h4"} sx={{margin: '20px'}}>
                    {'Поиск по номеру'}
                </Typography>
                <TextField
                    id="outlined-basic"
                    label="Номер"
                    variant="outlined"
                    type="text"
                    placeholder={'Поиск по номеру'}
                    sx={{width: '400px'}}
                    {...register('number')}
                    //@ts-ignore
                    helperText={errors.number?.message}
                    //@ts-ignore
                    error={errors.number}
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

export default CheckByPlate;

const numberShema = object({
    number: string().matches(/^\d{4}$/, 'Поле не должно быть меньше 4 цифр!').required()
}).defined()