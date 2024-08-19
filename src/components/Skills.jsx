import { Typography } from '@mui/material'
import React, { useState,useEffect } from 'react'
import { Navbar } from './Navbar'
import { FaHtml5 } from "react-icons/fa6";
import { SiCss3 } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { DiNodejs } from "react-icons/di";


export const Skills = () => {
  const [disp,setDisp] = useState(false)
  useEffect(()=>{
    window.addEventListener("resize",()=>{
      let h = document.body.getBoundingClientRect()
      if(h.width <= 782){
        setDisp(true)
      }
      else if(h.width > 782){
        setDisp(false)
      }
      console.log(h);
      console.log(disp);
      
    })
  },[])
  return (
    <>
    <div id="skills" className='container-fluid bg-dark py-5 skills'>
        
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <Typography color="white" variant='h4'>Skills</Typography>
            <Typography color="white" variant='h6'>Here are some of my skills on which i have learnt</Typography>
        </div>
        <br />
        <div className='row justify-content-evenly p-2'>
            
            <div className='col-md-5 py-5 border rounded-2'>

              <div className=' d-flex flex-column align-items-center rounded-2 shadow-sm'>

                 <div className='d-flex justify-content-center text-white'><Typography>FrontEnd</Typography></div> <br />
                 <div className={`${disp ? "container-fluid" : "col-md-8"} dis-grid`}>
                 <span className="badge border"><FaHtml5 className='h5 bg-warning rounded'/>&nbsp;HTML 5</span>
                 <span className="badge border"><SiCss3 className='h5 bg-primary rounded' />&nbsp;CSS</span>
                 <span className="badge border"><TbBrandJavascript className='h5 rounded' style={{backgroundColor:'yellow'}}/>&nbsp;Javascript</span>
                 <span className="badge border"><FaBootstrap className='h5 bg-primary rounded'/>&nbsp;Bootstrap</span>
                 <span className="badge border"><FaReact className='h5 bg-primary rounded'/>&nbsp;React Js</span>
                 <span className="badge border"><TbBrandRedux className='h5 bg-primary rounded'/>&nbsp;Redux
                 </span>
              </div>

              </div>

            </div>
        

            <div className={`${disp ? "mt-3" : ""} col-md-5 py-5 border d-flex flex-column align-items-center rounded-2 shadow-sm`}>

            <div className='d-flex justify-content-center text-white'><Typography>BackEnd</Typography></div>  <br />
                 <div className={`${disp ? "container-fluid" : "col-md-8"} dis-grid`}>
                 <span className="badge border"><DiMongodb className='h5 bg-success rounded' />&nbsp;MongoDB</span>
                 <span className="badge border"><DiNodejs className='h5 bg-success p-1 rounded' style={{backgroundColor:'yellow'}}/>&nbsp;Node Js</span>
                 </div>
                                 <br />
                 <div className='d-flex justify-content-center text-white'><Typography>Others</Typography></div> <br />
                 <div className='col-md-8 d-flex justify-content-center'>
                 <span className="badge border"><FaGithub className='h5 rounded'/>&nbsp;Github</span>
                 </div>

            </div>
            </div>
        </div>

    </>
  )
}
