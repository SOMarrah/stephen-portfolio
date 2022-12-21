import Image from 'next/image'
import AboutCard from '../components/AboutCard'
import Header from '../components/Header'
import HeroComponent from '../components/HeroComponent'
import abtData from '../utils/aboutData.json'
import ProjectCard from '../components/ProjectCard'
import projectData from '../utils/projectData.json'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const [aboutData, setAboutData ]= useState(null)
  const scrollToAbt = useRef(null);
  const scrollToProj = useRef(null);
  const scrollToTop = useRef(null);
  useEffect(() => {
    setAboutData(abtData)
  }, []);
  
    const handleClick = (check) => {
      if(check === 1){
        scrollToAbt.current?.scrollIntoView({behavior: 'smooth'});
      }
      else if(check === 2){
        scrollToProj.current?.scrollIntoView({behavior: 'smooth'});
      }
      else if(check === 3){
        scrollToTop.current?.scrollIntoView({behavior: 'smooth'});
      }
        
        
    }
  return (
    <div style={{height:"100%"}}>
      <HeroComponent scrollToTop={scrollToTop} handleClick={handleClick}/>
      <div style={{display:"flex", justifyContent:"space-between", flexDirection:"column"}}>
        
        <Header handleClick={handleClick}/>
        <AboutCard scrollToAbt={scrollToAbt} aboutData={aboutData}/>
        <ProjectCard scrollToProj={scrollToProj} projectData={projectData}/>
      </div>
    </div>
  )
}
