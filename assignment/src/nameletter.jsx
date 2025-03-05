import React, { useState } from 'react'
// const [lettercount,setLettercount]=useState([])

export default function Nameletter() {
    const foundLetter=(word)=>{
        let count={}
        for(let letter of word){
            count[letter]=(count[letter]||0)+1
        }
        let result=''
        for(let letter in word){
            result+=(count+letter)
        }
   console.log(count)
    // return count
    }
  return (
    <div>
        <p onClick={()=>foundLetter('krishnapriya')}>krishnapriya</p>
        
    </div>
  )
}
