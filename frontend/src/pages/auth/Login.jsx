import React,{useState,useEffect}from 'react'
import styles from "./login.module.css"
import { logout } from '../../../rudex/slices/auth';
import { Link ,useNavigate} from 'react-router-dom';
import {  useDispatch,useSelector } from 'react-redux';


const Login = () => {

  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const {isLoading, isError, errorMessage, user} = useSelector(
    (state) => state.user
  );

  const redirect = useNavigate();

  useEffect( () => {
    if (user.state === 'Success') {
      redirect('/');
    }
  }, [isLoading,isError])


  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();

    if (!Email || !Password) {
      alert('Please provide eamil and the password');
      return;
    }

    const data = {
      Email ,
      Password,
    };
    console.log(data);
    dispatch(logout(data));
  }
  return (
    <div className={styles.bod}>
      <div className={styles.box}>
        <div className={styles.form}>
          <h2>sign in</h2>
          <p className='my-3 text-red-500'>{ isError ? errorMessage : '' }</p>

          <form onSubmit={loginHandler} >
          <div className={styles.inputbox}>
          <input
            type='text'
            placeholder='Enter your email address'
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
            <span>username</span>
            <i></i>
          </div>

          <div className={styles.inputbox}>
          <input
            type='password'
            placeholder='Password'
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
            <span>password</span>
            <i></i>
          </div>

          <div className={styles.links}>
           <a href='#'>forget password</a>           
         <button className={styles.loginBtn}>
          
         {isLoading ? 'Loading...' : 'Login'}
         </button>
          </div>
          <div className={styles.account}>
        <Link to='/register'>Need a new account ?</Link>
      </div>
          </form>
          
        </div>
      </div>
    </div>

    //   <div className={styles.container } >
    //   <div className={styles.title}>Login</div>
    //   {/* <p>{loginError ? loginErrMsg : ''}</p> */}
    //   <form onSubmit={loginHandler}>
    //     <div className={styles.inputGroup}>
    //       <input
    //         type='text'
    //         placeholder='Enter your email address'
    //         value={Email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </div>
    //     <div className={styles.inputGroup}>
    //       <input
    //         type='password'
    //         placeholder='Password'
    //         value={Password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>
    //     <div className={styles.inputGroup}>
    //       <button className={styles.loginBtn}>
    //         {/* {loginLoading ? 'Loading...' : 'Login'} */}
    //       </button>
    //     </div>
    //   </form>

    //   <div className={styles.account}>
    //     <Link to='/register'>Need a new account ?</Link>
    //   </div>
    // </div>
  
  );
}

export default Login;