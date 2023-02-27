import React, { useState } from 'react';

const Register = ({ register }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastanme] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleRegister = () => {

    if (!isValidEmail(email)) {
      setError('Please enter a valid email');
    } else {
      const user =  {firstname, lastname, email, password};
      register(user);
    }
  }
  return (
    <div className="page">
      <div className="pageHeader"><h1>Mallow Shop</h1> <h3>Register</h3></div>
      <form onSubmit={(e) => {e.preventDefault(); handleRegister()}} className='form'>
      <div className='entry'>
        <div className='label'><h4>Full name</h4><h4 className='star'>*</h4></div>
        <input type='text' className='name' value={firstname} placeholder='firstname'
               onChange={(e) => setFirstname(e.target.value)} required />
        <input type='text' className='name' value={lastname} placeholder='lastname'
               onChange={(e) => setLastanme(e.target.value)} required/>
      </div>
      <div className='entry'>
        <div className='label'><h4>Email</h4><h4 className='star'>*</h4></div>
        <input type='text' className='email' value={email} placeholder='youremail@email.com'
               onChange={(e) => {setError(''); setEmail(e.target.value)}}/>
        <div className='error'>{error}</div>
      </div>
      <div className='entry'>
        <div className='label'><h4>Password</h4><h4 className='star'>*</h4></div>
        <input type='password' className='password' value={password} minLength={4} placeholder='********'
               onChange={(e) => setPassword(e.target.value)} required/>
      </div>
        <button className='button'>Register</button>
      </form>
      <div>Already have an account? Login here</div>
    </div>
  )
}

export default Register;