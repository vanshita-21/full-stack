import React from 'react'
import Card from '../Card';
function demo(props) {
  console.log(props.fakeData);
  const data = props.fakeData
  return (
    <>
    <h1>{props.name}</h1>
    <div>demo</div>
    {data.map((val)=><Card name={val.color} code={val.value}/>)}
    </>
  )
}

export default demo