
export default function interests() {
    const interests = ["Board Games", "Video Games", "3D", "Design", "Connecting", "Collaboration", "UX/UI", "Frontend Development", "New Businesses"]

  return (
    <div style={{display:"grid"}}>
        <h2>I am always interested in...</h2>
        {interests.map((value, index)=>{
            return(
                <div key={index} className="heroButton interests" style={{border:"solid white", borderRadius:"10px", width:"fit-content", padding:"4px", margin:"4px"}}>{value}</div>
            )
        })}
    </div>
  )
}
