import AboutObserver from "./AboutObserver";

export default function AboutCard({aboutData, scrollToAbt}) {
   
  return (
    <div ref={scrollToAbt} style={{position:"relative", width:"55%", display:"flex", margin:"10px auto", padding:"4px", flexFlow: "column nowrap", placeContent: "center", alignItems: "center"}}>
        {aboutData ?
        aboutData.map((value, index) => {
            return(
                <AboutObserver data={value} key={index}/>
            )
        })
    : null}
    </div>
  )
}
