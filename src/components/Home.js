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
              </>)
            })
          }
        </div>
      </section>
    </>
  )
}

export default Home