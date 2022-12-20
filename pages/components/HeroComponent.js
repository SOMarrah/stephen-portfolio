import Image from 'next/image'

export default function HeroComponent() {
  return (
    <div style={{display:"flex", justifyContent: "center", alignItems: "center", overflow:"hidden"}}>
        <div style={{height: "100vh", width:"100vw", overflow:"hidden"}}>
            <Image src="/images/energyspiral.gif" alt="energy spiral gif" fill objectFit='contain' objectPosition='top' style={{zIndex: "-1", scale:"140%"}}/>
        </div>
        <div style={{position:"absolute", top:"50%", display:"flex", flexDirection:"column" ,alignContent:"center", alignItems:"center" }}>
          <h2 style={{textAlign:"center"}}>
            Hello, my name is Stephen OMarrah. 
            <br/>
            I'm a Full Stack Developer.
          </h2>
          <button>Explore</button>
        </div>  
    </div>
  )
}
