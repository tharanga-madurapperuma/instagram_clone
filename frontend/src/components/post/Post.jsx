import React from 'react'
import Images from '../../assets/images'
import './post.css'

const Post = () => {
  return (
    <div className=' feedSection_post'>
        <div className='post_top flex justify-between items-center'>
            <div className="top-left_content flex">
                <div className="content-image">
                    <div className="image">
                        <img src={Images.tree} alt='Profile'></img>
                    </div>
                </div>
                <div className="content_data ml-3">
                    <div className="data-user-name-date flex items-center">
                        <div className="username text-base font-medium">Tharanga Sandun</div>
                        <div className='mx-2 bg-gray-500 mt-1'></div>
                        <div className="date text-gray-500 ml-0">1d</div>
                    </div>
                    <div className="data-caption">
                        <p className='text-sm font-light'>Faculty of Science</p>
                    </div>
                </div>
            </div>
            <div className="top-right-dots">
                <img src={Images.more} alt='More'/>
            </div>
        </div>
        <div className="post_image my-5">
            <div className="image-outline">
                <img src={Images.girl} alt='PostPicture' />
            </div>
        </div>
        <div className="post_bottom">
            <div className="bottom-icons flex justify-between">
                <div className="bottom-icons-left flex">
                    <img className='mr-3' src={Images.like} alt='Like' />
                    <img className='mr-3' src={Images.comment} alt='Comment' />
                    <img className='mr-3' src={Images.share} alt='Share' />
                </div>
                <div className="bottom-icons-right">
                    <img src={Images.save} alt='Save' />
                </div>
            </div>
            <div className="bottom-like-count">
                <p className='font-bold text-sm my-2'>10 likes</p>
            </div>
            <div className="bottom-user-name">
                <p>Tharanga Sandun<span className='text-blue-900'> #insta #free #tharanga</span></p>
            </div>
            <div className="bottom-add-comment">
                
            </div>
        </div>
    </div>
  )
}

export default Post