import React, { useState } from 'react'

function Registration() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
  
    const handleSubmit =(e) => {
      e.preventDefault();
      console.log(email,pass,firstName,lastName);
      setEmail('');
      setPass('');
      setFirstName('');
      setLastName('');
  }
  
    return (
      <div className='divSignUp'>
          <h1>Registration</h1>
          <div className='divSignUp1'>
              <h3>
                New Customer? Please create an account.
              </h3>
          </div>
          <form onSubmit={handleSubmit}>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                placeholder='Email'
              />
              <label>Password</label>
              <input 
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                name="password" 
                placeholder='Password'       
              />
              <label>First name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                name="firstName"  
                placeholder='First Name'          
              />
              <label>Last name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                name="lastName"  
                placeholder='Last Name'            
              />
              <label>Country or Region</label>
              <select>
                <option>---</option>
                <option>Georgia</option>
                <option>USA</option>
              </select>
              <label>Choose Date</label>
              <input
                type="date"            
              />  
              <button type="submit">Create account</button>
          </form>
          
      </div>
    )
  }

export default Registration