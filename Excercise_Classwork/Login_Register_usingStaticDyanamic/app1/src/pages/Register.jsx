import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router'
import { registerUser } from '../services/userService'
import { toast } from 'react-toastify'


function Register() {


        const [name,setName]=useState('')
        const [email,setEmail]=useState('')
        const [password,setPassword]=useState('')
        const [mobile,setMobile]=useState('')
        const navigate=useNavigate()


        const signup=async (event)=>{
            console.log('Sign up button clicked')
            console.log(`Name - ${name} Email - ${email} Password - ${password}  Mobile - ${mobile}`);
            
            
             if(name=='')
                toast.warn('Enter name')
            else if(email=='')
                toast.warn('Enter email')
            else if(password=='')
                toast.warn('Enter password')
            else if(mobile=='')
                toast.warn('Enter mobile')
             else{

            const result= await registerUser(name,email,password,mobile)

            console.log(result);
            if(result.status=='success'){
                navigate('/')
                toast.success('Register successful')
            }
            else{
                toast.error('Register unsucess')
            }
         }

        }


  return (
      <div className='container w-50'>
              <div className=" mt-3 mb-3">
                        <label for="inputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder="Enter name" onChange={event=>setName(event.target.value)} />
               </div>
              <div className=" mt-3 mb-3">
                  <label for="inputEmail" className="form-label">Email</label>
                  <input type="email" className="form-control" id="inputEmail" placeholder="Enter email" onChange={e=>setEmail(e.target.value)} />
              </div>
  
              <div className="mb-3">
                  <label for="inputPassword" className="form-label">Password</label>
                  <input type="password" className="form-control" id="inputPassword" placeholder="Enter password" onChange={e=>setPassword(e.target.value)} />
              </div>

              <div className=" mt-3 mb-3">
                  <label for="inputMobile" className="form-label">Mobile</label>
                  <input type="tel" className="form-control" id="inputMobile" placeholder="Enter mobile"  onChange={e=>setMobile(e.target.value)}/>
              </div>
  
              <div className="mb-3">
                  <button className="btn btn-success " onClick={signup} >Signup</button>
              </div>
  
              <div>
                  Already have an account? then to login <Link to='/login' >Click Here</Link>
              </div>
          </div>
    )
}

export default Register
