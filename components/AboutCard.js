import AboutObserver from "./AboutObserver";

export default function AboutCard({aboutData, scrollToAbt}) {
   
  return (
    <>
    {aboutData ?
    <div  ref={scrollToAbt} className="aboutGrid" style={{position:"relative", display:"grid", margin:"10px auto", padding:"4px", gridTemplateColumns:"repeat(1, 1fr)",placeContent: "center", alignItems: "center"}}>
        {aboutData ?
        aboutData.map((value, index) => {
            return(
                <AboutObserver data={value} key={index}/>
            )
        })
    : null}
    </div>
     : null }
    </> 
  )
}
