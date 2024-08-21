import { Typography,Stack,ImageList,ImageListItem,ImageListItemBar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import crmlogin from '../CRM imags/Login Page.png'
import crmhome from '../CRM imags/Home page.jpg'
import crmstudentreg from '../CRM imags/addstudent.png'
import crmstulist from '../CRM imags/student list.png'
import updatestu from '../CRM imags/update.png'
import delstu from '../CRM imags/delete.png'
import fliphome from '../FlipImgs/flip home.png'
import flipitems from "../FlipImgs/flip items.png"
import flipcart from '../FlipImgs/flipcart.png'
import flipshop from '../FlipImgs/shopping.png'

const CRM = [{image:crmlogin,title:"Login Page"},{image:crmhome,title:"Home Page"},{image:crmstudentreg,title:"Register Student"},{image:crmstulist,title:"Student List"},{image:updatestu,title:"Update student"},{image:delstu,title:"Delete List"}]

const SHOP = [{image:fliphome,title:"Home Page"},{image:flipitems,title:"Products Page"},{image:flipcart,title:"Cart"},{image:flipshop,title:"Shop List"}]
export const Projects = () => {
  return (
    <>
    <div id="projects" className='container-fluid projects pb-5' style={{backgroundColor:"black"}}>

        <div className='d-flex justify-content-center'>
        <Typography sx={{marginTop:10}} variant='h3' color="white">Projects</Typography>
        </div>

        <div className='d-flex justify-content-center '>
        <div className='col-md-8 text-center'>
        <Typography color="white">I have Individually working for some projects.
            There are, CRM - Customer Relationship Management, Ekart , Mailchimp during My internship.
        </Typography>
        </div>
        </div>  <br />

     <div className='container border rounded-2 p-3'>
      <Typography color="white">
      <Typography className="text-warning" variant="h6">
      Customer Relationship Management: (HTML, CSS, React Js,Redux Toolkit,NodeJs) 
      </Typography>                          
      Developed a Student Attendance Management System. Utilized HTML and CSS for a user-friendly and responsive interface. Implemented NodeJs for backend logic, data processing, and user interactions. Managed the MongoDb database for efficient data storage and retrieval.
      <br /> <br />
      <Typography>
      Data Management: Implemented features for storing, retrieving, and analyzing customer data, with a focus on lead management.
      </Typography>
      <br />
      <Typography>
      Security: Maintained data security through role-based access controls, encryption, and secure authentication methods.
      </Typography>
      <br />
      <Typography >Project Demo Video Link:&nbsp;<Link  to="https://drive.google.com/file/d/15I9q-qEii40yP3sJML--2kTrgIgzsDuj/view">Click Here</Link></Typography>
      </Typography>  
      <br />
      <Typography color="white">Project Github Link:&nbsp;<Link to="https://github.com/rammuthu1993/crud.git">Click Here</Link></Typography> 

      <br />
       <Typography color="white">Project Image Gallery:</Typography>
       <br />
      <div className='img-grid'>
      {CRM.map((item,index)=>{ return (<div key={index}>
        <a className='text-decoration-none' href={item.image}>
       <img src={item.image} alt={item.title} className='img-fluid'/>
       <div className="text-block text-white" >{item.title}</div></a>
       </div>)})}
     </div>  
     </div> 
                                 <br />
     <div className='container border rounded-2 p-3'>
      <Typography color="white">
      <Typography color='yellow' variant="h6">
      Shopping Cart: (HTML, CSS, Javascript) 
      <Typography color="white">I Implemented a user-friendly e-commerce website for the Ekart platform using JavaScript, designed to offer a seamless online shopping experience. This project involved creating an intuitive interface where customers can easily  select, and purchase products. </Typography>
      <br />
      </Typography>                          
      <Typography>Key features include:	</Typography>
      <Typography>
    	An integrated shopping cart that allows users to add, remove, and modify items before checkout.
      </Typography>
      <Typography>
	    A mobile phone view with a four-sided display and easy cart selection.
      </Typography>
      <Typography>
	    A drag-to-view feature on the homepage for exploring products and promotional slides.
	    Options to increase, decrease, or remove products from the cart.
      </Typography>

      <br /> 
      <Typography>
      The project emphasizes delivering high-quality work, optimizing performance, and creating a visually engaging experience.
      </Typography>
      <br />
      <Typography >Project Demo Video Link:&nbsp;<Link  to="https://drive.google.com/file/d/1hLdBpITj6Br1KNddGuz3xO-q0meA80uU/view?usp=sharing">Click Here</Link></Typography>
      </Typography> 
      <br />
      <Typography color="white">Project Github Link:&nbsp;<Link to="https://github.com/rammuthu1993/Flipkart.git">Click Here</Link></Typography> 
      <br />
       <Typography color="white">Project Image Gallery:</Typography>
       <br />
      <div className='img-grid'>
      {SHOP.map((item,index)=>{ return (<div key={index}>
        <a className='text-decoration-none' href={item.image}>
       <img src={item.image} alt={item.title} className='img-fluid'/>
       <div className="text-block text-white" >{item.title}</div></a>
       </div>)})}
     </div>  
     </div> 
     
    </div>
    </>
  )
}
