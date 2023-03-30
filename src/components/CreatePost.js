import React from 'react';
import { useForm } from './useForm';

const CreatePost = () => {
    const title = useForm('');
    const subTitle = useForm('');
    const content = useForm('');

    const handlesubmit = (e)=>{
        e.preventDefault();
        console.log('Title: ', title);
        console.log('Subtitle: ', subTitle);
        console.log('Content: ', content);
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