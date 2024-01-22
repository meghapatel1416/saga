import React, { useEffect, useState } from 'react'

export default function ListTutotorial() {

   const [data,setData] = useState([]);

   useEffect(()=>{

    fetch("http://QCSslocalhost:8080/api/tutorials")
    .then(y=>y.json())
    .then(y=>{
        setData(y)
    }).catch(y=>{

        console.log(y);
    })

   },[])
  return (
    <table>{

        data.map((value,index)=>{

            return (<tr>
                <td>{value.title}</td>
                <td>{value.description}</td>
                <td><button>Edit</button></td>
                <td><button>Delete</button></td>
            
            </tr>)
        })
        
        }</table>
  )
}