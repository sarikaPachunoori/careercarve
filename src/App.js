import { Component } from 'react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


import './App.css'


const subjects=["Marketing Management","Financial Management","Operations Management",
    "Human Resource Management","Organizational Behavior","Strategic Management",
    "Economics for Managers","Quantitative Methods","Business Law","Entrepreneurship",
    "International Business","Management Information Systems","Supply Chain Management",
    "Leadership and Team Management"]

class App extends Component{
    state={
        username:'',
        subject:subjects[0],
        date:'',
        month:'',
        hours:'',
        mins:'',
        avlbl:'',
        isSubmitted:false,
    }


     onHandleDayChange = (e) => {
        const value = e.target.value;
        if (value === '' || (Number(value) >= 1 && Number(value) <= 31)) {
          this.setState({date:value});
        }
      };
      
       onHandleMonthChange = (e) => {
        const value = e.target.value;
        if (value === '' || (Number(value) >= 1 && Number(value) <= 12)) {
            this.setState({month:value});
        }
      };
      
       onHandleHoursChange = (e) => {
        const value = e.target.value;
        if (value === '' || (Number(value) >= 0 && Number(value) <= 23)) {
            this.setState({hours:value});
        }
      };
      
       onHandleMinutesChange = (e) => {
        const value = e.target.value;
        if (value === '' || (Number(value) >= 0 && Number(value) <= 59)) {
            this.setState({mins:value});
        }
      };
      
      onHandleName=event=>{
          this.setState({[event.target.name]:event.target.value})
      }
      
      

    onHandleAreaOfInterest=event=>{
        this.setState({[event.target.name]:event.target.value})
    }

   

    submitForm = ()=> {
      this.setState({isSubmitted:true})
      }

    onBackPage=()=>{
      this.setState({isSubmitted:false,username:'',date:'',month:'',hours:'',mins:''})
    }


    render(){
        
        const{subject,username,date,hours,mins,month,payment,isSubmitted}=this.state
        return(
            <div className='stu-cont'>
            <img src="https://www.careercarve.com/careercarve-logo-white.png" alt="logo"  className='logo-2'/>
            <div className='cont-2'>
               
                  {isSubmitted?( 
                    <div className='success-cont'>
                        <FontAwesomeIcon icon={faCheckCircle} size="3x" color="#43f024" />
                        <p>   Dear, <span style={{fontWeight :'bold'}}>{username}</span> your session of <span style={{fontWeight :'bold'}}>{subject}</span>  <br/> is confirmed</p>
                      <button className='back-btn' onClick={this.onBackPage}>Back</button>
                      </div>
                    
                    ):(<>
                    <h1 className='heading'>Book Your Session</h1>              
                <form className="form-cont" onSubmit={this.submitForm}>
                    <label htmlFor="username" className='label'>Name</label>
                    <input type="text" className='input-box' 
                    placeholder="enter your name" name="username" value={username} onChange={this.onHandleName}/>
                    <p className='label'>Availability</p>
                    <div className='avl-cont'>
                    <label htmlFor="date" className='select'>(select date)</label>
                    <input
            type="number"
            placeholder="DD"
            className='avl-input'
            value={date}
            name="date"
            onChange={this.onHandleDayChange}
            min="1"
            max="31"
          />
          <input
            type="number"
            placeholder="MM"
            className='avl-input'
            value={month}
            name="date"
            onChange={this.onHandleMonthChange}
            min="1"
            max="12"
          /></div>
          <div className='avl-cont'>
            
          <label htmlFor="time" className='select'>(select time)</label>
                   
          <input
            type="number"
            placeholder="00"
            className='avl-input'
            value={hours}
            name="time"
            onChange={this.onHandleHoursChange}
            min="0"
            max="23"
          />
          <input
            type="number"
            placeholder="00"
            className='avl-input'
            value={mins}
            name="time"
            onChange={this.onHandleMinutesChange}
            min="0"
            max="59"
          /></div>
          <p className='label'>Area Of Interest</p>
            <select className='select-sub' onChange={this.onSelectSubj}>
                  {subjects.map((s, id) => (
                <option key={id} value={s}>{s}</option>
                    ))}
            </select>
              <label htmlFor="options" className='label'>Duration</label>
                <select id="options" name="options" className='duration'>
                    <option value="option1">30 Mins</option>
                    <option value="option2">45 Mins</option>
                    <option value="option3">60 Mins</option>
                </select>
          <div className='book-btn-cont'> 
             <button className='book-btn' type="submit" >Book Now</button>
          </div>
           </form></>)}
            </div>  
        </div>
    
    
        )
    }
}
export default App
