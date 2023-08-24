import Image from "next/image"
import { useState } from "react"
import Carousel from "./Carousel"

export default function ProjectCard({projectData, scrollToProj}) {
    const [showModal, setShowModal] = useState(false)
    const [modalData, setModalData] = useState(null)
    function closeModal () {
        setShowModal(false)
      }
    
      function openModal (data) {
        setModalData(data)
        setShowModal(true)
      }
  return (
    <div  ref={scrollToProj}style={{position:"relative", display:"grid", margin:"10px auto",width:"100%", padding:"4px"}}>
        {projectData ?
        projectData.map((value, index) => {
            return(
                <div className="ProjectCard" key={index} onClick={()=>openModal(value)} style={{margin:"20px", padding:"8px", display: "flex",flexFlow: "row nowrap", alignItems: "center"}} >
                    
                        {value.images?

                        <img src={value.images[0]} alt={value.images} style={{height:"auto", width:"400px", filter:"saturate(0)"}}/>
                        
                        
                      : null}
                    
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
         {showModal
                    ? (
                      <>
                        <div style={{display:"flex",alignItems:"center",alignContent:"center", overflowX:"hidden",overflowY:"hidden", position:"fixed", inset:"0", zIndex:"3", }}>
                          <div style={{position:"relative", width:"auto", }}>
                            {/* content */}
                            <div style={{height:"100vh", position:"relative", display:"flex",justifyContent: "center" , flexDirection:"column", background:"rgba(10,10,17,.2)", color:"white", backdropFilter:"blur(5px)" }}>
                              {/* header */}
                              <div style={{display:"flex", alignItems:"flex-start", justifyContent:"space-between", padding:"5px"}}>
                                <h3 style={{margin: "20px",color:"#F45B7E"}}>
                                {modalData.title}
                                </h3>
                              </div>
                              {/* body */}
                              <div >
                                <div >
                                {modalData.images?
                                
                                  <Carousel data={modalData.images} />
                                
                                :null}
                                  <p style={{margin: "20px"}}>
                                    {modalData.text}
                                  </p>
                                </div>
                              </div>
                              {/* footer */}
                              <div >
                                <button className='heroButton' style={{background: "none", border: "solid white", padding: "10px",margin: "20px", text:"10px", color:"#F45B7E"}} onClick={() => closeModal()}>
                                Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div></div>
                      </>
                    )
                    : null}
 
    </div>
  )
}
