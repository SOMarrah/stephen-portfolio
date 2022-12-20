import Image from 'next/image'
import AboutCard from './components/AboutCard'
import Header from './components/Header'
import HeroComponent from './components/HeroComponent'
import aboutData from '../utils/aboutData.json'
import ProjectCard from './components/ProjectCard'
import projectData from '../utils/projectData.json'

export default function Home() {
  return (
    <div style={{height:"100%"}}>
    <HeroComponent/>
    <div style={{display:"flex", justifyContent:"space-between", flexDirection:"column"}}>
      
      <Header/>
      <AboutCard aboutData={aboutData}/>
      <ProjectCard projectData={projectData}/>
    </div>
    
    </div>
  )
}
