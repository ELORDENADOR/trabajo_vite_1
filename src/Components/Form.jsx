import React, { useState } from 'react'
import Card from './Card'

const Form = () => {


// *!                               DATA

const [data,setData] = useState({
    email: "",
    password:"",
    rol: ""
})


// *!                               HOOKS

const [error,setError] = useState(true)
const [validador,setValidador] = useState(false)


// *!                               FUNCIONES

const handleChange = (e,propiedad) =>{
   setData({...data,[propiedad]: e.target.value})
   
}


const handleSubmit = (e) =>{
  e.preventDefault()

const  validarEmail = data.email.includes("@")
const  validarTamaño = data.password.length > 3;
 

if(validarEmail === false ||  validarTamaño === false){
 setError(false)
  //** RECHAZO ENVIO

 return
}
setValidador(true)
setError(true)
  //** ENVIO

console.log("data:",data)

}



  return (
    <div>
          <form onSubmit={handleSubmit}>
                <input
                placeholder='email'
                 type="text"
                 name="email"
                 onChange={e => handleChange(e,"email")}               
                />
                <br/>
                       {/* {error && (<span style={{color: "red"}}>Error </span>)} */}
                       {
                           error ? ("") : ("error")
                       }
                <br/>
                <input
                placeholder='password'
                 type="text"
                 name="password"
                 onChange={e => handleChange(e,"password")}
                />                 
                 <br/>
                       {/* {error && (<span style={{color: "red"}}>Error </span>)} */}
                       {
                           error ? ("") : ("error")
                       }
               
                <br/>



               <select 
                name="rol"
                onChange={e => handleChange(e,"rol")}
               >
                    <option value="" default>
                      Selecciona Rol
                   </option>
                   <option value="comprador">
                      Compardor
                   </option>
                   <option value="vendedor">
                       Vendedor
                   </option>
               </select>

               <br/>  <br/>
                <button>Enviar</button>
          </form>

        

{
    validador && 
    
    <Card 
    data = {data}
    />
}

    </div>
  )
}

export default Form