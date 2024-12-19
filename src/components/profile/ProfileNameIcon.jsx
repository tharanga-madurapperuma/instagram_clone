import React from "react";
import Images from "../../assets/images";

const ProfileNameIcon = () => {
    return (
        <div className="top-left_content flex">
            <div className="content-image">
                <div className="image">
                    <img src={Images.tree} alt="Profile"></img>
                </div>
            </div>
            <div className="content_data ml-3">
                <div className="data-user-name-date flex items-center">
                    <div className="username text-base font-medium">
                        Tharanga Sandun
                    </div>
                    <div className="mx-2 bg-gray-500 mt-1"></div>
                    <div className="date text-gray-500 ml-0">1d</div>
                </div>
                <div className="data-caption">
                    <p className="text-sm font-light">Faculty of Science</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileNameIcon;
