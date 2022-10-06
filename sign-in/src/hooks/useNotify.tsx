import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
});

interface Props {
  title: string
  type: string
  val: boolean
}

export default function Notify({title, type, val}: Props) {
  const [openN, setOpenN] = React.useState(false)
  const [openS, setOpenS] = React.useState(val);
  const [openE, setOpenE] = React.useState(false);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenS(false);
    setOpenE(false);
    setOpenN(false);
  };
  
  return (
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={openS} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            {title}
          </Alert>
        </Snackbar>
        {/* <Snackbar open={openE} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            Неправильный логин или пароль!
          </Alert>
        </Snackbar>
        <Snackbar open={openN} autoHideDuration={1000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
            Идет загрузка подождите!
          </Alert>
        </Snackbar> */}
      </Stack>
  );
}