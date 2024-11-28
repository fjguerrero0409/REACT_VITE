import React from 'react'

export default function BasicTypes() {
  const name:string ='Francine Josue';
  const age:number=34;
  const isActive: boolean=false;
  const people =['Juan','Pedro']
  return (
    <>
    <h3>Tipos Basicos</h3>
    {name}-{age}-{isActive? 'Activo' : 'No Activo'}-{people.join(', ')}

    </>
  )
}
