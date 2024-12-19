import React from "react";
import Images from "../../assets/images";
import "./story.css";

const Story = () => {
    return (
        <div className="story m-2 mt-10">
            <div className="story_outline flex justify-center items-center">
                <div className="story_image bg-white">
                    <img src={Images.tree} alt="story" />
                </div>
            </div>
        </div>
    );
};

export default Story;
