import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config.js';

function App() {
  const [isAuth, setIsAuth] = useState(Boolean(localStorage.getItem('isAuth')));
  
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
      
    })
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        {!isAuth ? ( 
          <Link to="/login">Login</Link> 
        ) : (
          <>
           <Link to="/post">Create Post</Link>
           <button onClick={signUserOut} className='logoutBtn'>Log out</button>
          </>
        )}
      </nav>
      <Routes>
        <Route path='/' element={<Home isAuth={isAuth}/>}/>
        <Route path='/post' element={<CreatePost isAuth={isAuth}/>}/>
        <Route path='/login' element={<Login setIsAuth={setIsAuth}/>}/>
      </Routes>
    </Router>
  )
}



export default App
