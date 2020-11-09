import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {
    return (
      <div className={s.item}>
        <img src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg" alt=""/>
        <div className={s.itemContent}>
          <p>{props.message}</p>
          <div className={s.like}>Понравилось: {props.like}</div>
          <button>Нравится</button>
        </div>
      </div>
    );
}

export default Post;