import  { useEffect, useState } from 'react'
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  
  const handleTitle = (event) => {
    setTitle(event.target.value);
  }

  const handlePostText = (event) => {
    setPostText(event.target.value);
  }

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid }
    });
    navigate("/");
  };

  useEffect(() => {
    if(!isAuth){
      navigate("/login");
    }
  }, []);




  return (
    <div className='createPostPage'>
      <div className='cpContainer'>
        <h1>Create a Post</h1>
        <div className='inputGp'>
          <label> Title: </label>
          <input 
            placeholder='Title...' 
            onChange={(event) => handleTitle(event)}
          />
        </div>
        <div className='inputGp'>
          <label> Post:</label>
          <textarea 
            placeholder='Post...'
            onChange={(event) => handlePostText(event)}
          ></textarea>
        </div>
        <button onClick={createPost}>Submit Post</button>
      </div>

    </div>
  )
}

CreatePost.propTypes = {
  isAuth: PropTypes.bool,
};


export default CreatePost