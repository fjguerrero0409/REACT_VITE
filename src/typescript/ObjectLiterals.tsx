import React from 'react'

export default function ObjectLiterals() {
const person={
    firstname:'Francine',
    lastname:'Guerrero',
    age:'26',
    address:{
        country:'Ecuador',
        house:256
    }

}



  return (
  <>
  <h3>Objetos </h3>
  {JSON.stringify(person,null,2)}
  </>
      
  )
}
