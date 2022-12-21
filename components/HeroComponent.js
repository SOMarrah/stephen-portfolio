import Image from 'next/image'

export default function HeroComponent({scrollToTop, handleClick}) {
  return (
    <div ref={scrollToTop} style={{display:"flex", justifyContent: "center", alignItems: "center", overflow:"hidden"}}>
        <div style={{height: "100vh", width:"100vw", overflow:"hidden"}}>
            <Image src="/images/energyspiral.gif" alt="energy spiral gif" fill objectFit='contain' objectPosition='top' style={{zIndex: "-1", scale:"140%"}}/>
        </div>
        <div style={{position:"absolute", top:"50%", display:"flex", flexDirection:"column" ,alignContent:"center", alignItems:"center" }}>
          <h2 style={{textAlign:"center"}}>
            <span>Hello, my name is </span><span style={{color:"#F45B7E"}}>Stephen OMarrah.</span> 
            <br/>
            <span>I'm a Full Stack Developer.</span>
          </h2>
          <button onClick={()=>handleClick(1)} className='heroButton' style={{background: "none", border: "solid white", padding: "10px",margin: "20px", text:"10px", color:"#F45B7E"}}><h2>Explore</h2></button>
        </div>  
    </div>
  )
}
