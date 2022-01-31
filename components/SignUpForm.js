import axios from 'axios';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from '../redux/user/user.action';
import styles from '../styles/SignUpForm.module.css';
import makeToast from '../Toaster';

const SignUpForm = ({val,close, currentUser, setUser}) => {
  const [values, setValues] = useState({
    name:"",
    email:"",
    role:"user",
    password:"",
    confirm:""
  });
  const {name,email,role, password, confirm} = values;



  const handleChange = (e) => {
    let name = e.target.name;
    setValues((state) => ({
      ...state,
      [name]:e.target.value
    }))
  };
  const signin = (e) => {
    e.preventDefault();
    axios({
      method:"POST",
      url: `${process.env.API}/user/signin`,
      data:{
        email:email,
        password:password
      }
    }).then((res) => {
        makeToast("success", "welcome "+res?.data?.user?.name+",");
        setUser(res.data);
        close();
    }).catch((err) => {
      makeToast("error", err?.response?.data?.error);
      console.log(err?.response?.data);
    })
  }

  const signup = (e) => {
    e.preventDefault();
    axios({
      method:"POST",
      url: `${process.env.API}/user/register`,
      data:{
        name:name,
        email:email,
        password:password,
        role:role
      }
    }).then((res) => {
        makeToast("success", "welcome "+res?.data?.user?.name+",");
        setUser(res.data);
        close();
    }).catch((err) => {
        makeToast("error", err.response.data.error);
        console.log(err.response.data);
    })
  }
    if (val == "SignUp") {
      return (
        <div>
          <form onSubmit={signup}>
            <ul className={styles.signUpForm}>
              <li>
                <label className={styles.label} htmlFor="Name">
                  Name
                </label>
                <input
                  className={styles.input}
                  id="Name"
                  name='name'
                  onChange={handleChange}
                  value={name}
                  type="text"
                  placeholder="Name"
                />
              </li>
              <li>
                <label
                  className={styles.label}
                  htmlFor="Email"
                >
                  Email
                </label>
                <input
                  className={styles.input}
                  id="Email"
                  name='email'
                  onChange={handleChange}
                  value={email}
                  type="email"
                  placeholder="Email"
                />
              </li>

              <li style={{display:'flex', flexDirection:'row',marginTop:15,marginBottom:15, justifyContent:'flex-start'}}>
            
                {/* <label
                  className={styles.label}
                >
                  Register As
                </label> */}
                <div style={{display:'flex', flexDirection:'row', marginRight:20}}>
                <input onChange={handleChange} style={{alignSelf:'center', marginRight:10}} type="radio" id="user" name="role" value="USER" />
                <label htmlFor="user">USER</label>
                </div>
                <div style={{display:'flex', flexDirection:'row'}}>
                <input  onChange={handleChange} style={{alignSelf:'center', marginRight:10}} type="radio" id="corporate" name="role" value="CORPORATE" />
                <label htmlFor="corporate">CORPORATE</label>
                </div>
                
              </li>
              
              <li>
                <label
                  className={styles.label}
                  htmlFor="Password"
                >
                  Password
                </label>
                <input
                  className={styles.input}
                  id="Password"
                  name='password'
                  onChange={handleChange}
                  value={password}
                  type="password"
                  placeholder="Password"
                />
              </li>
              <li>
                <label
                  className={styles.label}
                  htmlFor="Confirm Password"
                >
                  Confirm Password
                </label>
                <input
                  className={styles.input}
                  name='confirm'
                  onChange={handleChange}
                  value={confirm}
                  id="Confirm Password"
                  type="password"
                  placeholder="Confirm Password"
                />
              </li>
              <li>
                <input
                  type="submit"
                  className={styles.formSubmit}
                  value="Sign Up"
                />
              </li>
            </ul>
          </form>
        </div>
      );
    }
    else {
      return (
        <div>
          <form onSubmit={signin}>
            <ul className={styles.signUpForm}>
              <li>
                <label className={styles.label} htmlFor="Email">
                  Email
                </label>
                <input
                  className={styles.input}
                  id="Email"
                  value={email}
                  name="email"
                  onChange={handleChange}
                  type="text"
                  placeholder="Email"
                />
              </li>
              <li>
                <label className={styles.label} htmlFor="Password">
                  Password
                </label>
                <input
                  className={styles.input}
                  id="Password"
                  value={password}
                  name="password"
                  onChange={handleChange}
                  type="password"
                  placeholder="Password"
                />
              </li>
              <li>
                <input
                  type="submit"
                  className={styles.formSubmit}
                  value="Sign In"
                />
              </li>
            </ul>
          </form>
        </div>
      );
    }
}
const mapStateToProps = (state) => ({
  currentUser : state.user.currentUser
});
const mapDispatchToProps = (dispatch) => ({
  setUser : user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)

