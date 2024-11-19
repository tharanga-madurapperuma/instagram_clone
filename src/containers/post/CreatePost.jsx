import React from 'react'
import './post.css'
import Modal from 'react-modal';

Modal.setAppElement('#root');

const CreatePost = ({isOpen, onRequestClose}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Create Post"
      className="modal"
      overlayClassName="overlay"
    >
      <h2>Create Post</h2>
      <form>
        <textarea placeholder="What's on your mind?" />
        <button type="submit">Post</button>
      </form>
    </Modal>
  )
}

export default CreatePost