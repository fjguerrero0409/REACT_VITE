import React from 'react'

interface Person{
    age:number,
    firstname:string
    lastname:string
    address:{
        country:string,
        house:number
    }
}



export default function ObjectLiterals() {
const person:Person={
    age:26,
    firstname:'Francine',
    lastname:'Guerrero',
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
