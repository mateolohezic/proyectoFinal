import axios from 'axios';
import React, { useState, useEffect } from 'react'

function FormularioCrearUser() {

    const [users, setUsers] = useState([])

    useEffect(() =>{
      axios.get(`http://localhost:8000/users/obtener-users`)
      .then((response) =>{
          setUsers(response.data);
      })
      .catch((error) =>{
          console.log(error);
      })
  }, [])

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [datos, setDatos] = useState({
        username: '',
        password: '',
        
    });

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const validate =  (values) => {
        const errors = {}
        const regexUsername = /^[a-z0-9 ,.'-]{4,20}$/i;
        const regexPassword = /^([a-zA-Z0-9*#$-_+"!%&]{6,25})$/i;
        const usersCoinciden = users.filter(user => user.username === values.username && user.password === values.password)
        if (!values.username) {
            errors.username = 'Usuario requerido.';
        } else if (!regexUsername.test(values.username) || values.username.includes("  ") || values.username.charAt(0) === " ") {
            errors.username = 'Usuario invalido.';
        }
        if (!values.password) {
            errors.password = 'Contraseña requerida.';
        } else if (!regexPassword.test(values.password) || values.password.includes("  ") || values.password.charAt(0) === " ") {
            errors.password = 'Contraseña invalida.';
        }
        if (usersCoinciden.length === 0) {
            errors.password = 'Datos incorrectos.';
        }
        return errors;
    }

    const enviarDatos = (event) => { 
        event.preventDefault();
        setFormErrors(validate(datos));
        if (isSubmit === true) {
        axios.post(`http://localhost:8000/users/crear-user`, datos)
        window.location.replace('/');
        }

    }

    useEffect(() => {
        setIsSubmit(false)
        if(Object.keys(formErrors).length === 0){
        setIsSubmit(true)
        }
    }, [handleInputChange])

    return (
        <>

        </>
  )
}

export default FormularioCrearUser