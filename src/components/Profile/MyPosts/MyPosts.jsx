import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = (posts) => {
  let messageData = posts.posts;
  
  let postss = messageData.map((m)=>{
    return <Post message={m.message} like={m.likesCount}/>
  });


  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button type="submit">Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postss}
      </div>
    </div>
  );
}

export default MyPosts;