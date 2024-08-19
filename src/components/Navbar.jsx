import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'

export const Navbar = ({about,skills,projects}) => {
       console.log(about);
       
   return (
    <>
       <nav className='container-fluid d-flex justify-content-between align-items-center p-2' style={{backgroundColor:"black"}}>
        <Typography variant='h6' color="white">Portfolio</Typography>
        <ul className='nav nav-pills'>
          <Typography className='nav-item'><a href='#about' className={`${about ? 'active' : ""} nav-link text-white`} >About</a></Typography>
          <Typography className='nav-item'><a href="#skills" className={`${skills ? 'active' : ""} nav-link text-white`} >Skills</a></Typography>
          <Typography className='nav-item'><a href='#projects' className={`${projects ? 'active' : ""} nav-link text-white`} to="">Projects</a></Typography>
        </ul>
       </nav>
    </>   
  )
}
