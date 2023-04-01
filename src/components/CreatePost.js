import React from 'react';
import { useForm } from '../useForm';
import { firestore } from '../firebase';

const CreatePost = () => {
    const title = useForm('');
    const subTitle = useForm('');
    const content = useForm('');
    const image = useForm('');

    function handlesubmit(e){
      e.preventDefault();
      console.log('Title', title);
      console.log('SubTitle', subTitle);
      console.log('Content', content);
  
      firestore.collection('posts').add({
        Title: title.value,
        Subtitle: subTitle.value,
        Content: content.value,
        Image: image.value,
        CreatedAt: new Date(),
      })
    }
  return (
    <section className='section1 createpost'>
    <form onSubmit={handlesubmit}>
      <h1>Create Post</h1>
        <input className='inputvalue' placeholder='Title' {...title} />
        <input className='inputvalue' placeholder='Subtitle' {...subTitle} />
        <input className='inputvalue' name="image" placeholder='Image Url' {...image}></input>
        <textarea className='inputvalue' rows='5' placeholder='Content' {...content} />
        <button>Submit</button>
    </form>
    </section>
  )
}

export default CreatePost