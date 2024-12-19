import React, { useEffect, useState } from "react";
import "./post.css";
import EmojiPicker from "emoji-picker-react";
import axios from "axios";
import Data from "../../fetchData";

const Post = ({ post }) => {
    const [comment, setComment] = useState("");
    const [showPicker, setShowPicker] = useState(false);
    const [user, setUser] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                Data.users.getUserById + post.userId
            );
            setUser(response.data);
        };

        fetchData();
    }, []);

    // Imoji handle method
    const handleEmojiClick = (emojiObject) => {
        setComment((prevComment) => prevComment + emojiObject.emoji);
    };

    return (
        <div className=" feedSection_post">
            <div className="post_top flex justify-between items-center">
                <div className="top-left_content flex">
                    <div className="content-image">
                        <div className="image">
                            <img
                                src={
                                    !user?.userImage
                                        ? "./assets/users/general.jpg"
                                        : `./${user.userImage}`
                                }
                                alt="Profile"
                            ></img>
                        </div>
                    </div>
                    <div className="content_data ml-3">
                        <div className="data-user-name-date flex items-center">
                            <div className="username text-base font-medium">
                                {user?.firstName} {user?.lastName}
                            </div>
                            <div className="mx-2 bg-gray-500 mt-1"></div>
                            <div className="date text-gray-500 ml-0">1d</div>
                        </div>
                        <div className="data-caption">
                            <p className="text-sm font-light">
                                {user?.caption}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="top-right-dots">
                    <img src="./assets/icons/More.png" alt="More" />
                </div>
            </div>

            <div className="post_image my-5">
                <div className="image-outline">
                    <img src={`./${post?.imageUrl}`} alt="PostPicture" />
                </div>
            </div>
            <div className="post_bottom">
                <div className="bottom-icons flex justify-between">
                    <div className="bottom-icons-left flex">
                        <img
                            className="mr-3"
                            src="./assets/icons/ActivityFeed.png"
                            alt="Like"
                        />
                        <img
                            className="mr-3"
                            src="./assets/icons/Comment.png"
                            alt="Comment"
                        />
                        <img
                            className="mr-3"
                            src="./assets/icons/SharePosts.png"
                            alt="Share"
                        />
                    </div>
                    <div className="bottom-icons-right">
                        <img src="./assets/icons/Save.png" alt="Save" />
                    </div>
                </div>
                <div className="bottom-like-count">
                    <p className="font-bold text-sm my-2">
                        {post.likeCount} Likes
                    </p>
                </div>
                <div className="bottom-user-name">
                    <div className="mt-2 text-gray-700 font-normal">
                        {post.description}
                    </div>
                </div>
                <div className="bottom-add_comment">
                    <div className="flex flex-col">
                        <div className="flex justify-between items-center">
                            <input
                                className="comment_border py-3 outline-none w-full border-none"
                                type="text"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                placeholder="Add a comment..."
                            />
                            <div className="flex items-center">
                                <p className="text-blue-700 font-bold text-sm mr-2">
                                    {comment.length > 0 ? "Post" : ""}
                                </p>
                                <button
                                    onClick={() => setShowPicker(!showPicker)}
                                >
                                    <img
                                        className="transition duration-300 ease-in-out"
                                        src={
                                            !showPicker
                                                ? "./assets/icons/Emoji.png"
                                                : "./assets/icons/Arrow.png"
                                        }
                                        alt="Imoji"
                                    />
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-end emo">
                            {showPicker && (
                                <EmojiPicker onEmojiClick={handleEmojiClick} />
                            )}
                        </div>
                    </div>
                    <div className="comment-bottom-line w-full bg-gray-400"></div>
                </div>
            </div>
        </div>
    );
};

export default Post;
