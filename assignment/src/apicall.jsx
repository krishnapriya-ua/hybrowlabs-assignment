import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Apicall() {
    
const [name,setName]=useState([])

    const fetchApi=async()=>{
        const response=await axios.get(`https://swapi.dev/api/people/`)
        
        setName(response)
        console.log(response)
   

    }

  return (
    <div>
        <button onClick={()=>fetchApi()}>click me</button>
         {name.map((names,index)=>
        <li key={index}>{names.name}</li>
        )} 
    </div>
  )
}
