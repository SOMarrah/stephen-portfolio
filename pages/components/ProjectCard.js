import Image from "next/image"

export default function ProjectCard({projectData}) {
  return (
    <div style={{position:"relative", width:"55%", display:"flex", margin:"10px auto", padding:"4px", flexFlow: "column nowrap", placeContent: "center", alignItems: "center"}}>
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

// {
//     "title":"Elite-Marine",
//     "stack":"Nextjs, Rails, Docker",
//     "responsibility": "Full-Stack, UX/UI",
//     "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec mi eget velit scelerisque ullamcorper. Aenean nisl elit, sagittis ut sapien quis, faucibus fermentum nulla. In nec molestie nunc, vel convallis augue. Sed non efficitur lectus, id tristique elit.",
//     "figma":"https://www.figma.com/file/ehTHZZUgLjYYdotRyeiE3p/Next.js-Portfolio?node-id=8%3A153&t=bo0quy9J2GG967V5-0",
//     "github":"",
//     "live":"https://elite-marine-next.fly.dev/",
//     "images":"/images/elitemarine1.png"
// },
