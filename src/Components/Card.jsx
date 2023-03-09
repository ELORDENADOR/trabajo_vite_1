import React from 'react'

const Card = ({data}) => {
  return (
    <div>
        <h2>Email:{data.email}</h2>
        <h2>Contarseña:{data.password}</h2>
        <h2>Rol:{data.rol}</h2>
    </div>
  )
}

export default Card