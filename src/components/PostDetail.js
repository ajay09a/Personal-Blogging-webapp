import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {firestore} from '../firebase';

const PostDetail = () => {
  const [post, setpost] = useState({});
  const {postId} = useParams();
  useEffect(()=>{
    firestore.collection("posts").doc(postId).get().then((snapshot)=>{
      setpost(snapshot.data());
    })
  }, [])
  return(
        <div className='postDetailContainer'>
          <img src={post.Image} />
          <div className='postDetailContent'>
            <h1>{post.Title}</h1>
            <p>{post.Content}</p>
          </div>
        </div>
  )
}

export default PostDetail;