import React from 'react';
import { useForm } from '../useForm';
import { firestore } from '../firebase';

const CreatePost = () => {
    const title = useForm('');
    const subTitle = useForm('');
    const content = useForm('');

    function handlesubmit(e){
      e.preventDefault();
      console.log('Title', title);
      console.log('SubTitle', subTitle);
      console.log('Content', content);
  
      firestore.collection('posts').add({
        Title: title.value,
        Subtitle: subTitle.value,
        Content: content.value,
        CreatedAt: new Date(),
      })
    }
  return (
    <form onSubmit={handlesubmit}>
        <label>Title: </label>
        <input {...title} />
        <label>Subtitle: </label>
        <input {...subTitle} />
        <label>Content: </label>
        <input {...content} />
        <button>Submit</button>
    </form>
  )
}

export default CreatePost