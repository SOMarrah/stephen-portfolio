import ParallaxText from "./ParralaxText"


export default function interests() {
    const interests = ["Board Games", "Video Games", "3D", "Design", "Connecting", "Collaboration", "UX/UI", "Frontend Development", "New Businesses"]
    


  return (
    <div className="background">
        <h2>I am always interested in...</h2>
        <div>
        <ParallaxText baseVelocity={-4}>
        {interests.map((value, index)=>{
            return(
             <div className="heroButton interests" style={{border:"solid white", borderRadius:"10px", width:"fit-content", padding:"4px", margin:"4px"}} >{value}</div>
            )
        })}
        </ParallaxText>
        <ParallaxText baseVelocity={4}>
        {interests.map((value, index)=>{
            return(
             <div className="heroButton interests" style={{border:"solid white", borderRadius:"10px", width:"fit-content", padding:"4px", margin:"4px"}} ><span>{value}</span></div>
            )
        })}
        </ParallaxText>
        </div>
    </div>
  )
}
