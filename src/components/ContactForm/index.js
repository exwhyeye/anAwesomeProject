import React from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from "yup";
import axios from "axios";
import './styles.scss'
 
 const SendForm = () => {

    function onSubmit(values) {
        console.log(values)
        try {
            const response = axios.post('http://84.201.139.254:1337/send_email', values);
            console.log('👉 Returned data:', response);
            alert('Письмо успешно отправлено');
            document.getElementById("contact-form").reset();
        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }
    }
  
    return (
        <div className="signup_body">
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    subject: '',
                    text: '',
                    }}
                
                onSubmit={onSubmit}
                
                validationSchema = {Yup.object().shape({
                    email: Yup.string().email('Некорректный ввод').required('Обязательно к заполнению'), 
                    name: Yup.string()
                        .required('Обязательно к заполнению'),                         
                    text: Yup.string()
                        .required('Обязательно к заполнению'),
                })}
        
                render={() => {                   
                return (
                    <Form className = "input_area" id = "contact-form">
                        <div className = "first_two">
                        <div>
                            <Field 
                                name="name" 
                                type="name" 
                                placeholder = "ИМЯ*"
                                style = {{height: '50px', width: '262.5px'}}
                            />
                            <div style = {{color: "red", fontSize: 'smaller'}}>
                                <ErrorMessage name="name" />
                            </div>
                        </div> 

                        <div>
                            <Field 
                                name="email"
                                type="email"
                                placeholder = "ЭЛ. ПОЧТА*"
                                style = {{height: '50px', width: '262.5px'}}
                            />
                            <div style = {{color: "red", fontSize: 'smaller'}}>
                                <ErrorMessage name="email" />
                            </div>
                        </div>
                        </div>

                        <div>
                            <Field 
                                name="subject" 
                                type="subject" 
                                placeholder = "ТЕМА" 
                                style = {{height: '50px', width: '100%'}}    
                            />
                        </div>

                        <div>
                            <Field 
                                name="text"
                                type="text"
                                component="textarea"
                                rows="2"
                                placeholder = "СООБЩЕНИЕ*" 
                            />
                            <div style = {{color: "red", fontSize: 'smaller'}}>
                                <ErrorMessage name="text" />
                            </div>                           
                        </div>

                        <div>
                            <button className = "buttonSend" type="submit">ОТПРАВИТЬ</button>
                        </div>
                    </Form>
                )}}
            />
        </div>
    )
}

export default SendForm