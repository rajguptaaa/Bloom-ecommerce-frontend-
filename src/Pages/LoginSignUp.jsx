// // import React from 'react'
// // import './LoginSignUp.css'

// // export const LoginSignUp = () => {
// //   return (
// //     <div className='loginsignup'>
// //       <div className="container">
// //         <h1>Sign Up</h1>
// //         <div className="fields">
// //           <input type='text'placeholder='Your Name'/>
// //           <input type='email'placeholder='Your Email'/>
// //           <input type='password'placeholder='Enter your password'/>

// //         </div>
// //         <button>Continue</button>
// //         <p className="login">Already have an account?<span>Log In</span></p>
// //         <div className="agree">
// //         <input type='checkbox' name='' id=''/>
// //         <p>By Continuing,I agree to the terms and Conditions</p>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }
// import React, { useState } from 'react';
// import './LoginSignUp.css';

// export const LoginSignUp = () => {
//   const [isLogin, setIsLogin] = useState(false); // Toggle between login and signup

//   return (
//     <div className='loginsignup'>
//       <div className="container">
//         <h1>{isLogin ? 'Log In' : 'Sign Up'}</h1>

//         <div className="fields">
//           {!isLogin && (
//             <input type='text' placeholder='Your Name' />
//           )}
//           <input type='email' placeholder='Your Email' />
//           <input type='password' placeholder={isLogin ? 'Enter your password' : 'Create a password'} />
//         </div>

//         <button className='btn'>{isLogin ? 'Log In' : 'Continue'}</button>

//         <p className="toggle">
//           {isLogin ? (
//             <>
//               Don't have an account? <span className='span' onClick={() => setIsLogin(false)}>Sign Up</span>
//             </>
//           ) : (
//             <>
//               Already have an account? <span className='span' onClick={() => setIsLogin(true)}>Log In</span>
//             </>
//           )}
//         </p>

//         {!isLogin && (
//           <div className="agree">
//             <input type='checkbox' id='terms' />
//             <label htmlFor='terms'>By continuing, I agree to the Terms and Conditions</label>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

import React, { useState } from 'react';
import './LoginSignUp.css';

export const LoginSignUp = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    let validationErrors = {};
    if (!isLogin && !formData.name.trim()) {
      validationErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Enter a valid email address';
    }
    if (!formData.password.trim()) {
      validationErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters';
    }
    if (!isLogin && !formData.termsAccepted) {
      validationErrors.termsAccepted = 'You must accept the terms and conditions';
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Handle form submission (e.g., API call)
    }
  };

  return (
    <div className='loginsignup'>
      <div className="container">
        <h1>{isLogin ? 'Log In' : 'Sign Up'}</h1>
        <form onSubmit={handleSubmit}>
          <div className="fields">
            {!isLogin && (
              <>
                <input
                  type='text'
                  name='name'
                  placeholder='Your Name'
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className='error'>{errors.name}</p>}
              </>
            )}
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className='error'>{errors.email}</p>}
            <input
              type='password'
              name='password'
              placeholder={isLogin ? 'Enter your password' : 'Create a password'}
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className='error'>{errors.password}</p>}
          </div>

          <button type='submit' className='btn'>
            {isLogin ? 'Log In' : 'Continue'}
          </button>

          <p className="toggle">
            {isLogin ? (
              <>
                Don't have an account? <span className='span' onClick={() => setIsLogin(false)}>Sign Up</span>
              </>
            ) : (
              <>
                Already have an account? <span className='span' onClick={() => setIsLogin(true)}>Log In</span>
              </>
            )}
          </p>

          {!isLogin && (
            <div className="agree">
              <input
                type='checkbox'
                id='terms'
                name='termsAccepted'
                checked={formData.termsAccepted}
                onChange={handleChange}
              />
              <label htmlFor='terms'>By continuing, I agree to the Terms and Conditions</label>
              {errors.termsAccepted && <p className='error'>{errors.termsAccepted}</p>}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
