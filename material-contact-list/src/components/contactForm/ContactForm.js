import React from 'react';
import Button from '@material-ui/core/Button';
import { Formik, Form, Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { resetForm, saveContact, deleteContact } from '../../store/actions';
import * as Yup from 'yup';
import Grid from '@material-ui/core/Grid';


function ContactForm({selectedContact, resetForm, saveContact, deleteContact}) {

    function onSubmit(values, actions){
        console.log('submitted', values, actions);

        saveContact(values);

        actions.resetForm({
            values: {
                name: '',
                surname: '',
                phone: '',
            }
        })

        resetForm();
    }

    function onDeleteBtnClick() {
        deleteContact(selectedContact.id);
        resetForm();
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        surname: Yup.string().required('Required'),
        // phone: Yup.string().required('Required')
    })

    return (
        <Grid item container >
            <Formik 
                initialValues={selectedContact}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {(formik) => {
                    // console.log(formik);
                
                return (     
                    <Form autoComplete="off">
                        <Grid item>
                            <Field name="name">
                                {textField}
                            </Field>
                        </Grid>
                        <Grid item>
                            <Field name="surname">
                                {textField}
                            </Field>
                        </Grid>
                        <Grid>
                            <Field name="phone">
                                {textField}
                            </Field>
                        </Grid>
                        <Grid item>
                            <Button 
                                type="submit" 
                                variant="contained" 
                                color="primary"
                                disabled={!formik.dirty || !formik.isValid}
                                style={{marginRight: 20}}
                            >Save</Button>
                            {selectedContact.id ? <Button 
                                                    type="button" 
                                                    variant="contained" 
                                                    onClick={onDeleteBtnClick}
                                                >Delete</Button> : null}
                        </Grid>
                        
                    </Form>
                )}}
            </Formik>
        </Grid>
    )
}

function textField ({field, meta}) {
    // console.log(field, meta);

    return (
        <>
            <TextField 
                {...field} 
                variant="outlined" 
                label={field.name}
                style={{textTransform: 'capitalize', marginBottom: '15px', width: '400px'}}
            /> 
            {meta.error && meta.touched ? 
                <div style={{color: 'red'}}>
                    {`*${meta.error}`}
                </div> : null}
            <br/>
        </>
    )
}


function mapStateToProps({selectedContact}) {
    return { selectedContact }
}

const mapDispatchToProps = {
    resetForm,
    saveContact,
    deleteContact
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)
