import React from 'react'

function Card(props) 
{
    console.log(props);
  return (
      <>
    <div>Card</div>
    <h1 style={{color:props.code}} key={props.name}>{props.name}</h1>
    </>
  )
}

export default Card