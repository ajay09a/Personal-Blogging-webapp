import React, {useState, useEffect} from 'react';
import {firestore} from '../firebase';
import { Link } from 'react-router-dom';

const Home = () => {
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
  return(
    <>
      <section class="hero" />
      <section className='section1'>
        <div>
          <h1>Tech Blog</h1>
          <div id='blog-by'>Ajay</div>
          {
            posts.map((post, index)=>{
              return (<>
                        <div className='post' key={`post-${index}`}>
                          <div className='headingimg'>
                            <img className='blogpostimg' src={post.Image} alt={post.Title} />
                          </div>
                          <div className='headingpost'>
                            <Link to={`/post/${post.id}`}>
                              <h3>{post.Title}</h3>
                            </Link>
                            <p>{post.Subtitle}</p>
                          </div>
                        </div>
              </>)
            })
          }
        </div>
      </section>
    </>
  )
}

export default Home