import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import PropTypes from "prop-types";
import Pagination from "./Pagination";
import { useState, useEffect } from "react";

function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(2);

  const postsCollectionRef = collection(db, "posts");

  
  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    setPostList(postLists.filter(post => post.id !== id));
  };

  useEffect(() => {
    const getPosts = async () => {
      try{
        const data = await getDocs(postsCollectionRef);
        setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch(error) {
        console.log(error);
      }
      
    };

    getPosts();
  },[]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = postLists.slice(firstPostIndex, lastPostIndex);
  
  console.log(postLists.length);
  return (
          <div className="homePage">
                {currentPosts.map((post) => {
                  return (
                    <div className="post" key={post.id}>
                      <div className="postHeader">
                        <div className="title">
                          <h1> {post.title}</h1>
                        </div>
                        <div className="deletePost">
                          
                          {isAuth && post.author && post.author.id === auth.currentUser.uid && (
                            <button
                              onClick={() => {
                                deletePost(post.id);
                              }}
                            >
                            {" "}
                              &#128465; 
                            </button>
                          )}
                      
                    </div>
                  </div>
                  <div className="postTextContainer"> {post.postText} </div>
                  <h3>@{post.author.name}</h3>
                </div>
              );
            })}
            <Pagination
                totalPosts={postLists.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />

          </div>
  );
}

Home.propTypes = {
  isAuth: PropTypes.bool,

};


export default Home;