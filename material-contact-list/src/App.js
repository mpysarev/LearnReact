import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import ContactList from './components/contactList/ContactList';
import ContactForm from './components/contactForm/ContactForm';
import Header from './components/header/Header';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './App.css';
import { fetchContacts, resetForm } from './store/actions';


function App({fetchContacts, resetForm, selectedContact}) {

  useEffect(fetchContacts, []);

  function onAddBtnClick() {
    console.log('on add clicked');
    resetForm();
  }


  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper style={{textAlign: 'center', padding: '20px 0', marginBottom: '30px'}}>
          <Header />
        </Paper>
      </Grid>

      <Grid item container>
          <Grid item xs={12} sm={6} container alignItems="center" direction="column">
            <Typography variant="h5" style={{marginBottom: '20px'}}>
              Contact List
            </Typography>
            <Grid item>
              <ContactList />
            </Grid>
            <Button variant="contained" style={{width: '60%'}} onClick={onAddBtnClick}>Add contact</Button>
          </Grid>

          <Grid item xs={12} sm={6} container justify="center">
            <Typography variant="h5">
              Contact Form
            </Typography>
            <Grid item>
              <ContactForm key={selectedContact.id}/> 
            </Grid>
          </Grid>
      </Grid>
    </Grid>
  );
}

const mapDispatchToProps = {
  fetchContacts,
  resetForm
}

function mapStateToProps({selectedContact}) {
  return { selectedContact }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
