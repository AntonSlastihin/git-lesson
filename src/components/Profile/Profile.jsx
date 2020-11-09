import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from "./Profile.module.css";
import ProfileInfo from './ProfileInfo/ProfileInfo';

let messageData = [
  { id: 1, message: "Hey!", likesCount: 20},
  { id: 2, message: "How are you?", likesCount: 10},
  { id: 1, message: "Hey!", likesCount: 20},
  { id: 2, message: "How are you?", likesCount: 10},
  { id: 1, message: "Hey!", likesCount: 20},
  { id: 2, message: "How are you?", likesCount: 10},
  { id: 1, message: "Hey!", likesCount: 20},
  { id: 2, message: "How are you?", likesCount: 10}
];

const Profile = () => {
  return <div>
    <ProfileInfo />
    <MyPosts posts={messageData}/>
  </div>
}

export default Profile;