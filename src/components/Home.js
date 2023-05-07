import React, {useState, useEffect} from 'react';
import {firestore} from '../firebase';
import { Link } from 'react-router-dom';
import { doc, deleteDoc } from "firebase/firestore";

const Home = ({user}) => {
  const [posts, setposts] = useState([]);
  useEffect(()=>{
    firestore.collection('posts').get().then((snapshot)=>{
      const post = snapshot.docs.map((doc)=>{
        return {
          id: doc.id,
          ...doc.data()
        }
      });
      setposts(post);
    })
  }, [])
  const handleDelete = async(id)=>{
    await deleteDoc(doc(firestore, "posts", id));
  }
  return(
    <>
      <section className="hero" />
      <section className='section1'>
        <div>
          <h1>Blog</h1>
          {
            posts.map((post, index)=>{
              return (<><Link to={`/post/${post.id}`}>
                        <div className='post mainContainer' key={`post-${index}`}>
                          <div className='headingimg'>
                            <img className='blogpostimg' src={post.Image} alt={post.Title} />
                          </div>
                          <div className='headingpost'>
                            <h3>{post.Title}</h3>
                            <p>{post.Subtitle}</p>
                          </div>
                        </div>
                        </Link>
                        {user?<div>
                            <button onClick={()=>handleDelete(post.id)}>Delete</button>
                          </div>:null}
              </>)
            })
          }
        </div>
      </section>
    </>
  )
}

export default Home