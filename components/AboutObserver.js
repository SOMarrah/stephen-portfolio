import { useRef, useEffect, useState } from 'react';

export default function AboutObserver({data}) {
    const myRef = useRef(null);
    const [cardVis, updateCardVis] = useState(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer)=>{
            const entry = entries[0];
            updateCardVis(entry.isIntersecting);
        });
        observer.observe(myRef.current);
      }, []);
  return (
    <>
    {data ?
    <div ref={myRef} style={{margin:"20px", padding:"8px", display: "flex",flexFlow: "row nowrap", placeContent: "center", alignItems: "center", opacity: cardVis ? 1 : 0, transition:"all ease-in-out 2s"}} >
    <div>
        <img src="/images/d4.png" alt="d4 dice" style={{height:"auto", width:"100px"}}/>
    </div>
    <div style={{margin:"10px", padding:"15px", borderRadius:"10px", zIndex:"0"}}>
        <h4 style={{textAlign:"center", marginBottom:"20px", color:"#F45B7E"}}>{data.title}</h4>
        <p style={{background:"grey", margin:"10px", padding:"15px", borderRadius:"10px", zIndex:"0"}}>{data.text}</p>
    </div>
    </div>
    : null}
    </>
  )
}
