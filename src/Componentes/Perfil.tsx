import React from 'react'
import Permiso from './Permiso'

interface Props{
    nombre:string,
    apellido:string,
    edad?:number  
}


const Perfil = (props:Props) => {
  return (
    <>
      <p>nombre:{props.nombre}</p>
      <p>apellido:{props.apellido}</p>
      <p>edad:{props.edad}</p>
      {
        props.edad!=undefined &&
        props.edad > 18 &&
        <>
            <p>tienes permitido pasar</p>
            <Permiso permiso1='Beber' permiso2='Conducir'/>
        </>
      }
        
        {
        props.edad!=undefined &&
        props.edad < 18 &&
        <>
            <p>No tienes permitido pasar</p>
            <Permiso permiso1='Tomar leche' permiso2='divertirse'/>
        </>
      }

      
    </>
  )
}

export default Perfil
