
export default function interests() {
    const interests = ["Board Games", "Video Games", "3D", "Design", "Connecting", "Collaboration", "UX/UI", "Frontend Development", "New Businesses"]

  return (
    <>
        <h2>I am always interested in...</h2>
        {interests.map((value, index)=>{
            return(
                <div key={index}>{value}</div>
            )
        })}
    </>
  )
}
