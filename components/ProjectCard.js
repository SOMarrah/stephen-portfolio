import Image from "next/image"

export default function ProjectCard({projectData, scrollToProj}) {
  return (
    <div  ref={scrollToProj}style={{position:"relative", width:"55%", display:"flex", margin:"10px auto", padding:"4px", flexFlow: "column nowrap", placeContent: "center", alignItems: "start"}}>
        {projectData ?
        projectData.map((value, index) => {
            return(
                <div key={index} style={{margin:"20px", padding:"8px", display: "flex",flexFlow: "row nowrap", placeContent: "center", alignItems: "center"}} >
                    
                        <img src={value.images} alt="" style={{height:"auto", width:"400px", filter:"saturate(0)"}}/>
                    
                    <div>
                        <div style={{textAlign:"left", marginLeft:"20px"}}>
                        <h4 >{value.title}</h4>
                        <h5> {value.responsibility}</h5>
                        </div>
                    </div>
                </div>
            )
        })
    : null}
    </div>
  )
}
