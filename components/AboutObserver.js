import { useRef, useEffect, useState } from 'react';
import FadeIn from './FadeIn';

export default function AboutObserver({data}) {
    if(!data){
        data = {
            title: "UAV Online",
            text: "I am a USMC veteran, deployed to Afghanistan, and I flew drones for 4 years. This was my first experience working intensively with technology along with collaborating in cross-team environments, and holding leadership positions. "
        }
    }
    
    
  return (
    <>
    {data ?
        <FadeIn direction={1}>
        <div style={{margin:"20px",marginTop:"100px" ,marginBottom:"200px" , padding:"8px", display: "flex",flexFlow: "row nowrap", placeContent: "center", alignItems: "center"}} >
        <div>
            <img src="/images/d4.png" alt="d4 dice" style={{height:"auto", width:"100px"}}/>
        </div>
        <div style={{margin:"10px", padding:"15px", borderRadius:"10px", zIndex:"0"}}>
            <h4 style={{textAlign:"center", marginBottom:"20px", color:"#F45B7E"}}> {data.title} </h4>
            <p style={{background:"grey", margin:"10px", padding:"15px", borderRadius:"10px", zIndex:"0"}}>{data.text}</p>
        </div>
        </div>
        </FadeIn>
    : null}
    </>
  )
}
