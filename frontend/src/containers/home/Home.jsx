import React from 'react'
import Images from '../../assets/images'
import './home.css'
import Story from '../../components/story/Story'
import Post from '../../components/post/Post'
import Follower from '../../components/follower/Follower'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Home = () => {
  return (
    <div className='flex flex-row'>
      <div className="leftMenu justify-items-start text-gray-800 m-10">
        {/* left menu */}
        <div className="mt-0 mb-20">
          <img src={Images.logo} alt="logo" />
        </div>

        <div className="flex my-10 flex-row">
          <img src={Images.home_fill} alt="home" />
          <span>Home</span>
        </div>
        <div className="flex flex-row my-10">
          <img src={Images.search} alt="search" />
          <span>Search</span>
        </div>
        <div className="flex flex-row my-10">
          <img src={Images.newPost} alt="newPost" />
          <span>Create Post</span>
        </div>
        <div className="flex flex-row my-10">
          <img src={Images.profile} alt="profile" />
          <span>Profile</span>
        </div>
        <div className='flex flex-row my-10'>
          <img src={Images.settings} alt="settings" />
          <span>Settings</span>
        </div>
        <div className='flex flex-row my-10'>
          <img src={Images.logout} alt="logout" />
          <span>Logout</span>
        </div>
      </div>

      <div className="speration-line w-0.5 bg-gray-300"></div>

      <div className="feedSection justify-items-cente">
      {/* feed section */}
        <div className="feedSection_story flex flex-row justify-items-start ">
          <Swiper
            spaceBetween={5}
            slidesPerView={8}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide><Story /></SwiperSlide>
            <SwiperSlide><Story /></SwiperSlide>
            <SwiperSlide><Story /></SwiperSlide>
            <SwiperSlide><Story /></SwiperSlide>
            <SwiperSlide><Story /></SwiperSlide>
            <SwiperSlide><Story /></SwiperSlide>
            <SwiperSlide><Story /></SwiperSlide>
            <SwiperSlide><Story /></SwiperSlide>
            <SwiperSlide><Story /></SwiperSlide>
            <SwiperSlide><Story /></SwiperSlide>
            <SwiperSlide><Story /></SwiperSlide>
            <SwiperSlide><Story /></SwiperSlide>
          </Swiper>
        </div>
        <div className="feedSection_post">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
      <div className="followers justify-items-center pr-10 mt-5 pt-5">
      {/* followers list */}
      <Follower />
      <Follower />
      <Follower />
      <Follower />
      <Follower />
      <Follower />
      <Follower />
      <Follower />
      <Follower />
      <Follower />
      <Follower />
      <Follower />
      <Follower />
      <Follower />
      </div>
    </div>
  )
}

export default Home