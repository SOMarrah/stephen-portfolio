import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div style={{position:"sticky",top:"0", display:"flex", flexDirection:"row", flexWrap: "nowrap",alignContent: "center",justifyContent: "space-between",alignItems: "center", backdropFilter:"blur(3px)", zIndex:"1", height:"100px"}}>
        <div style={{height:"150px", width:"auto", userSelect:"none", webkitUserDrag:"none" }}>
            <Image src="/images/logo.gif" alt="energy spiral gif" fill objectFit="contain" objectPosition="left"/>
        </div>
        <div style={{display:"flex", justifyContent: "space-around"}}>
            <h3 style={{margin:"10px auto", padding:"10px"}}>About</h3>
            <h3 style={{margin:"10px auto", padding:"10px"}}>Projects</h3>
            <h3 style={{margin:"10px auto", padding:"10px"}}>Contact</h3>
        </div>
        </div>
  )
}
