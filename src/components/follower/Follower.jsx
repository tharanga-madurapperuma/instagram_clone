import React from 'react'
import './follower.css'
import Images from '../../assets/images'
import '../post/post.css'

const Follower = () => {
  return (
    <div className='follower mt-3'>
      <div className=" flex justify-between">
        <div className='top-left_content flex'>
          <div className="content-image">
            <div className="image">
              <img src={Images.tree} alt='Profile'></img>
            </div>
          </div>

          <div className="content_data ml-3">
            <div className="data-user-name-date flex items-center">
              <div className="username text-base font-medium">Tharanga Sandun</div>
            </div>
            <div className="data-caption">
              <p className='text-sm font-light'>Faculty of Science</p>
            </div>
          </div>
        </div>

        <div className="date text-blue-600">follwed</div>

      </div>
    </div>
  )
}

export default Follower