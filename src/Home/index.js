import { Component } from 'react'
import { useNavigate } from 'react-router-dom';

import './index.css'

const Home =()=>{

    const navigate=useNavigate();
const onClickBtn=()=>{
navigate("/form")
}

return(
 <div className="bg-cont">
  <img src="https://www.careercarve.com/Career_Carve_Logo__1_-removebg-preview%202.png" className='logo' alt="logo" />        
  <div className='about-main-cont'>
    <div className='about-cont'> 
       <h1 className='about-heading'>About Us</h1>
      <p className='about-para'>CareerCarve provides placement training to MBA students. One of the 
         activities as part of training is 1x1 Mock Interview.   In this activity, a student 
         gets interviewed by a mentor for a set duration To schedule this activity, 
         both student and mentor should be free at the same time for the set duration. 
      </p>
      </div>
      <div className='img-cont'>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/008/846/307/small_2x/online-courses-with-students-sitting-on-books-pile-with-laptops-notebooks-png.png" className='image' alt="img" />
        <p style={{textAlign:'center',fontSize:'18px',marginTop:'0px',color:'#615955'}}>Book your 1X1 session here</p>
        <button className='button' onClick={onClickBtn}>Book Now</button>
      </div>
    </div>
    <img src="https://ccicons.s3.amazonaws.com/landing_page/careercarve-mentors.webp" alt="pic" className='grp-img'/>
  </div>
        
    )
}
export default Home;
