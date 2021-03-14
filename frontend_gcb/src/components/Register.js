import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Select from './Select';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export function Register() {
    const [address, setAddress] = useState('')
    const onBlurCep = (event) => {

        const { value } = event.target

        const cep = value?.replace(/[^0-9]/g, '')
        
        if(cep?.length !== 8 ){
            return
        }
        axios.get(`https://viacep.com.br/ws/${cep}/json`).then(response => {
            setAddress(response.data)
        })
        .catch(error => {
            console.log(error.message)
        })
    }


  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cadastro de profissional
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nome"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="crm"
                label="CRM"
                name="crm"
                autoComplete="crm"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="phone"
                name="phone"
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Telefone"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="cellphone"
                label="Celular"
                name="cellphone"
                autoComplete="cellphone"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="postalcode"
                label="CEP"
                name="postalcode"
                autoComplete="postalcode"
                onBlur={onBlurCep}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="publicPlace"
                name="publicPlace"
                variant="outlined"
                required
                fullWidth
                id="publicPlace"
                value={address.logradouro}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="neighborhood"
                name="neighborhood"
                variant="outlined"
                required
                fullWidth
                id="neighborhood"
                autoFocus
                value={address.bairro}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="locality"
                name="locality"
                autoComplete="locality"
                value={address.localidade}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="uf"
                name="uf"
                autoComplete="uf"
                value={address.uf}
              />
            </Grid>           
            <Grid item xs={12} sm={1}>
                <Select/>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Cadastrar
          </Button>
          <Grid container justify="flex-end">            
          </Grid>
        </form>
      </div>      
    </Container>
  );
}