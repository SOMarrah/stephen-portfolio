import Image from 'next/image'
import { useRef } from 'react';

export default function Header({handleClick}) {

  return (
    <div style={{position:"sticky",top:"0", display:"flex", flexDirection:"row", flexWrap: "nowrap",alignContent: "center",justifyContent: "space-between",alignItems: "center", backdropFilter:"blur(3px)", zIndex:"1", height:"100px"}}>
        <div onClick={()=>handleClick(3)} style={{height:"100px", width:"100px", userSelect:"none", WebkitUserDrag:"none", zIndex:"0", position:"relative"}}>
            
            <Image  className="animated" width={'100'} height={'100'} src="/images/logo.gif" alt="energy spiral gif" />
            <Image className="static" src="/images/logo.png" alt="energy spiral gif" width={'100'} height={'100'}/>
        </div>
        <div style={{display:"flex", justifyContent: "space-around"}}>
            <h3 onClick={()=>handleClick(1)} className="links" style={{margin:"10px auto", padding:"10px"}}>About</h3>
            <h3 onClick={()=>handleClick(2)} className="links" style={{margin:"10px auto", padding:"10px"}}>Projects</h3>
            <h3 className="links" style={{margin:"10px auto", padding:"10px"}}>Contact</h3>
        </div>
        </div>
  )
}
