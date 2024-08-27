import React,{useEffect, useState} from "react"
import { Typography, Button } from "@mui/material"
import { Navbar } from "./Navbar"
import { TypeAnimation } from 'react-type-animation'
import Muthu from "../imgs/Muthu.jpg"
import { Skills } from "./Skills"
import { Projects } from "./Projects"

export const PortFolio = ()=>{
  const [about,setAbout] = useState(false)
  const [skills,setSkills] = useState(false)
  const [projects,setProjects] = useState(false)
  const [dispwidth,setDispwidth] = useState(false)

  useEffect(()=>{

    window.addEventListener("scroll",
       ()=>{let about = document.querySelector(".about").getBoundingClientRect() 
       if(Math.abs(about.y) <= (about.height - 56) ){ setAbout(true)
        setSkills(false)
       }
       else{setAbout(false)
        setSkills(true)
        setProjects(false)
       } 
       let project = document.querySelector(".projects").getBoundingClientRect();
       if(project.y < 45 ){ setProjects(true)
        setSkills(false)
       }
       
})

    window.addEventListener("resize",()=>{
      let h = document.body.getBoundingClientRect();
      if(h.width < 782){
        setDispwidth(true)
      }
      else if(h.width > 782){
        setDispwidth(false)
      }
      
    })
    
    
  },[])

 
  
    return (
        <>
        <div style={{position:"sticky",left:0,top:0,zIndex:2}}>
        <Navbar about={about} skills={skills} projects={projects}/>
        </div>

        <div id="about" className="container-fluid about" style={{backgroundColor:"black"}}>
          
           <div className="row">

              <div className="col-md-6 p-2 d-flex flex-column align-items-center justify-content-center">

            <div className="width-effect">
              <div>
               <h1 className="text-white ">Hi, I am</h1> 
               <h1 className="text-white ">Muthukumar R.</h1> 
               </div>

          <span >
          <span style={{fontSize:"2em"}} className="text-white">I am </span>
          <span className="">
          <TypeAnimation className='bg-primary text-white rounded-3' sequence={[
            "MERN stack Developer.",1000
           ]}
           wrapper='span'
           speed={200}
           style={{fontSize:'2em',display:'inline-block'}}
           
           /></span></span>    
        
                    <br /> <br />
              <Typography variant="h6" color="white">
              Motivated and dedicated Mernstack developer with a strong foundation in programming principles. Skilled in Javascript and NodeJs. Passionate about creating efficient and reliable applications. Strong problem solving and teamwork abilities. Eager to contribute to software development projects. 	  
              </Typography>
              <br />
              <div className="dis-grid">
              <Button variant="contained"><a className="text-decoration-none text-white" href="https://drive.google.com/file/d/1z7B3bHpuMNOv549UR8kw9Y0fXhbHmjjU/view?usp=sharing">View Resume</a> </Button>

              <Button variant="contained"><a className="text-decoration-none text-white" href="https://drive.google.com/file/d/1EzjNSbQXDEJ_TdQeXL8nqYh-tHfqYADj/view?usp=sharing">Internship Certicate</a> </Button>  
              </div>
              </div> 

              </div>

              <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                  <img className="rounded-circle h-75 img-fluid" src={Muthu} alt="Muthukumar"/>
              </div>
           </div>
           </div>
          
           <Skills />
           <Projects/>
        </>        
    )
}
