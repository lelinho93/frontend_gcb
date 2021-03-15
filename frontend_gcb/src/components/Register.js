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
import axios from 'axios';
import { useForm } from '../hooks/useForm';
import MultipleSelect from './Select';

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
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export function Register() {
  
  const classes = useStyles();

  const [specialty, setSpecialty] = useState([]);

  const { form, onChange } = useForm({name: "", crm: "", phone: "", cellphone: "", cep: "" })

   const body = {
     name: form.name,
     crm: form.crm,
     phone: form.phone,
     cellphone: form.cellphone,
     cep: form.cep,
     specialty: specialty
   }
   console.log(body)

    const onSubmitForm = (event) => {    
        event.preventDefault() 
        axios.post("http://localhost:3306/doctor", body)
      .then(response => {
          alert("Cadastro efetuado!")    
      })
      .catch(error => {
          console.log(error.response.data)
      })     
    }
    
    const handleInputChange = (event) => {
        const { value, name } = event.target

        onChange(value, name)
    }   

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
        <form className={classes.form} noValidate onSubmit={onSubmitForm}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Nome"
                autoFocus
                value={form.name}
                onChange={handleInputChange}
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
                value={form.crm}
                onChange={handleInputChange}
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
                value={form.phone}
                onChange={handleInputChange}
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
                value={form.cellphone}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="cep"
                label="CEP"
                name="cep"
                autoComplete="cep"
                value={form.cep}
                onBlur={onBlurCep}
                onChange={handleInputChange}
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
            <Grid item xs={12} sm={6}>           
              <MultipleSelect
              name="specialty"
              label="Especialidade médica"
              specialty={specialty}
              onChange={onChange}
              value={form.specialty}
              setSpecialty={setSpecialty}
              />              
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