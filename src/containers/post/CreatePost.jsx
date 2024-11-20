import React, { useEffect, useState } from 'react'
import './post.css'
import Modal from 'react-modal';
import Images from '../../assets/images';

Modal.setAppElement('#root');

const CreatePost = ({open, onClose}) => {
  const [modelOpen, setModelOpen] = useState(false); 

  useEffect(() => {
    setModelOpen(open);
  }, [open]);

  return (
    <Modal
      isOpen={modelOpen}
      onRequestClose={() => {
        setModelOpen(false);  
        onClose();
      }}
      contentLabel="Create Post"
      className="modal"
      overlayClassName="overlay"
      shouldCloseOnOverlayClick={true}
    >
      <div className='flex flex-col items-center'>
        <div className='mb-[8px]'>
          <h2 className='font-bold'>Create New Post</h2>
        </div>
        <div className='h-[1px] w-full bg-gray-400'></div>
        <div className='dragdrop flex flex-col justify-center items-center p-20'>
          <img src={Images.dragDrop} alt="dragDrop" />
          <p>Drag photos and video here</p>
          <label htmlFor='file-upload'>Select from Computer</label>
          <input type='file' id='file-upload'/>
        </div>
      </div>
    </Modal>
  )
}

export default CreatePost