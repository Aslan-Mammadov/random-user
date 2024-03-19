import React from 'react'

const Contact = ({randomUser}) => {
    const {cell, name, picture, email}=randomUser;
    console.log(randomUser)
  return (
    <div>
      <h1>Phone:{cell}</h1>
     
    </div>
  )
}

export default Contact
