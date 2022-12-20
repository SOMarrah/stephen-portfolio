import Image from "next/image"
import { useRef, useEffect } from 'react';

export default function AboutCard({aboutData}) {
    const myRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer)=>{
            const entry = entries[0];
            console.log('entry', entry);
            console.log('entry.isIntersecting', entry.isIntersecting);
        });
        observer.observe(myRef.current);
      }, []);
  return (
    <div style={{position:"relative", width:"55%", display:"flex", margin:"10px auto", padding:"4px", flexFlow: "column nowrap", placeContent: "center", alignItems: "center"}}>
        {aboutData ?
        aboutData.map((value, index) => {
            return(
                <div ref={myRef} key={index} style={{margin:"20px", padding:"8px", display: "flex",flexFlow: "row nowrap", placeContent: "center", alignItems: "center"}} >
                    <div>
                        <img src="/images/d4.png" alt="d4 dice" style={{height:"auto", width:"100px"}}/>
                    </div>
                    <div style={{background:"dark-grey", margin:"10px", padding:"15px", borderRadius:"10px"}}>
                        <h4 style={{textAlign:"center", marginBottom:"20px"}}>{value.title}</h4>
                        <p>{value.text}</p>
                    </div>
                </div>
            )
        })
    : null}
    </div>
  )
}
