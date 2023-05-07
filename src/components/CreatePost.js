import React from 'react';
import { useForm } from '../useForm';
import { firestore, storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const CreatePost = () => {
    const title = useForm('');
    const subTitle = useForm('');
    const content = useForm('');

    const handlesubmit = async(e)=>{
      e.preventDefault();
      console.log('Title', title);
      console.log('SubTitle', subTitle);
      console.log('Content', content);
      const file = e.target[2].files[0]

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${title + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          firestore.collection('posts').add({
            Title: title.value,
            Subtitle: subTitle.value,
            Content: content.value,
            Image: downloadURL,
            CreatedAt: new Date(),
          })
        })
      });
  
    }
  return (
    <section className='section1 createpost'>
    <form onSubmit={handlesubmit}>
      <h1>Create Post</h1>
        <input className='inputvalue' placeholder='Title' {...title} />
        <input className='inputvalue' placeholder='Subtitle' {...subTitle} />
        {/* <input className='inputvalue' name="image" placeholder='Image Url' {...image}></input> */}
        <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file" style={{display:'flex', alignItems:'center'}}>
            <img style={{width:50, borderRadius:50, height:50}} src="https://i.pinimg.com/736x/f4/a3/4e/f4a34ef7fd2f8d3a347a8c0dfb73eece.jpg" alt="avatar" />
            <span>Add an avatar</span>
          </label>
        <textarea className='inputvalue' rows='5' placeholder='Content' {...content} />
        <button>Submit</button>
    </form>
    </section>
  )
}

export default CreatePost