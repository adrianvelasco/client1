import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Typography, Container, Paper } from '@material-ui/core';
import UserIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation, gql } from '@apollo/client';
import { useRouter } from 'next/router';
import Navegation from '../src/Components/Navegation';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);


const AUTHENTICATION = gql`
  mutation Authentication($input: UserAuth!){
    authenticateUser(input: $input){
      token
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    height: '80px',
    width: '80px',
    backgroundColor: '#01579b'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#4caf50'
  },
}));

export default function Login() {
  const classes = useStyles();
  const router = useRouter();
  const [Authenticate] = useMutation(AUTHENTICATION, {
    onCompleted: async (data) => {
      MySwal.fire({
        title:'Bienvenido!',
        icon:'success',
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(() => {
        router.push('/');
      },1500);
      await localStorage.setItem("token", `${data.authenticateUser.token}`);
    },
    onError: (error) => {
      MySwal.fire({
        title: `${error.message}`,
        icon:'error',
        showConfirmButton: true,
      })
    }
  });

  const  formik = useFormik({
    initialValues:{
      userName: "",
      password: ""
    },
    validationSchema: Yup.object({
      userName: Yup
      .string()
      .required('El usuario es obligatorio'),
      password: Yup
      .string()
      .required('La contraseña es obligatoria')
    }),
    onSubmit: values => {
      const input ={
        userName: values.userName,
        password: values.password
      }      
      Authenticate({variables: {input}});
    }
  })


  return (
    <Navegation>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Paper className={classes.paper} elevation={4}>
          <Avatar className={classes.avatar}>
            <UserIcon fontSize='large' className={classes.avatar}/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Iniciar Sessión
          </Typography>
          <form className={classes.form} onSubmit={formik.handleSubmit}>
            <TextField
              value={formik.values.userName}
              onChange={formik.handleChange}
              helperText={formik.touched.userName ? formik.errors.userName : ""}
              error={formik.touched.userName && Boolean(formik.errors.userName)}
              onBlur={formik.handleBlur}
              variant="outlined"
              margin="normal"
              fullWidth
              id="userName"
              label="Usuario"
              name="userName"
              autoFocus
            />
            <TextField
              value={formik.values.password}
              onChange={formik.handleChange}
              helperText={formik.touched.password ? formik.errors.password : ""}
              error={formik.touched.password && Boolean(formik.errors.password)}
              onBlur={formik.handleBlur}
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Iniciar Sessión
            </Button>
          </form>
        </Paper>
      </Container>
    </Navegation>
  );
}