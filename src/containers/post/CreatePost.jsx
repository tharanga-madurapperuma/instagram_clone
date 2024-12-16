import React, { useEffect, useState } from "react";
import "./createPost.css";
import Modal from "react-modal";
import Images from "../../assets/images";
import ProfileNameIcon from "../../components/profile/ProfileNameIcon";

Modal.setAppElement("#root");

const CreatePost = ({ open, onClose }) => {
    const [modelOpen, setModelOpen] = useState(false);
    const [isDragOver, setIsDragOver] = useState(false);
    const [file, setFile] = useState("");

    // Use effect to handle open and close modal
    useEffect(() => {
        setModelOpen(open);
    }, [open]);

    // Drop handle
    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];

        if (
            droppedFile.type.startsWith("image/") ||
            droppedFile.type.startsWith("video/")
        ) {
            setFile(droppedFile);
        }
    };

    // Drag over handle
    const handleDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "copy";
        setIsDragOver(true);
    };

    // Drag leave handle
    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragOver(false);
    };

    // On change handle for file input
    const handleOnChange = (e) => {
        e.preventDefault();
        const file = e.target.files[0];

        if (
            file &&
            (file.type.startsWith("image/") || file.type.startsWith("video/"))
        ) {
            setFile(file);
        } else {
            setFile(null);
            alert("Please select image or video file");
        }
    };

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
            <div className="flex flex-col items-center">
                <div className="mb-[8px]">
                    <h2 className="font-bold">Create New Post</h2>
                </div>
                <div className="h-[1px] w-full bg-gray-400"></div>
                {!file && (
                    <div
                        className="dragdrop flex flex-col justify-center items-center p-20"
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                    >
                        <img src={Images.dragDrop} alt="dragDrop" />
                        <p>Drag photos and video here</p>
                        <label htmlFor="file-upload">
                            Select from Computer
                        </label>
                        <input
                            type="file"
                            id="file-upload"
                            accept="image/*, video/*"
                            onChange={handleOnChange}
                        />
                    </div>
                )}
                {file && (
                    <div className="flex">
                        <div className="newPostImageContainer ">
                            <img
                                className="newPostImage"
                                src={URL.createObjectURL(file)}
                                alt=""
                            />
                        </div>

                        <div className="flex flex-col w-[400px] h-full mt-5">
                            <div className="flex items-start w-full">
                                <ProfileNameIcon />
                            </div>
                            <textarea
                                rows={5}
                                className="w-full bg-slate-100 mt-5 p-5"
                            ></textarea>
                        </div>
                    </div>
                )}
            </div>
        </Modal>
    );
};

export default CreatePost;
