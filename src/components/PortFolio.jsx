import React,{SetStateAction, useEffect, useState} from "react"
import { Box, Stack, Typography, Toolbar, Button } from "@mui/material"
import { Navbar } from "./Navbar"
import { TypeAnimation } from 'react-type-animation'
import Muthu from "../imgs/Muthu.jpg"
import { Skills } from "./Skills"
import { Projects } from "./Projects"

export const PortFolio = ()=>{
  const [about,setAbout] = useState(false)
  const [skills,setSkills] = useState(false)
  const [projects,setProjects] = useState(false)

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
       console.log(project);
       if(project.y < 45 ){ setProjects(true)
        setSkills(false)
       }
       
       /* let skills = document.querySelector(".skills").getBoundingClientRect();
       if(Math.abs(skills.y + 390) <= (skills.height - 56) ){ setSkills(true)}
       else if(Math.abs(skills.y) > (skills.height)){setSkills(false)}  */
       
      console.log(skills)
      
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

            <div className="w-75">
              <div>
               <h1 className="text-white ">Hi, I am</h1> 
               <h1 className="text-white ">Muthukumar R.</h1> 
               </div>

          <span>
          <span style={{fontSize:"2em"}} className="text-white">I am </span>
          <TypeAnimation className='bg-primary text-white rounded-3' sequence={[
            "MERN stack Developer.",1000
           ]}
           wrapper='span'
           speed={200}
           style={{fontSize:'2em',display:'inline-block'}}
           
           /></span>    
        
                    <br /> <br />
              <Typography className="w-75" sx={{}} variant="h6" color="white">
              Motivated and dedicated Mernstack developer with a strong foundation in programming principles. Skilled in Javascript and NodeJs. Passionate about creating efficient and reliable applications. Strong problem solving and teamwork abilities. Eager to contribute to software development projects. 	  
              </Typography>
              <br />
              <div className="d-flex justify-content-center w-75">
              <Button variant="contained"><a className="text-decoration-none text-white" href="/src/Files/Muthukumar R Resume.pdf">View Resume</a> </Button>  
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
