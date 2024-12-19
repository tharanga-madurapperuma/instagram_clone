const BASE_URL = "http://localhost:8080";

const Data = {
    users: {
        getAllUsers: `${BASE_URL}/users/getAllUsers`,
        getUserById: `${BASE_URL}/users/getUserById/`,
        addUser: `${BASE_URL}/users/addUser`,
        updateUser: `${BASE_URL}/users/updateUser/`,
        getUserByEmail: `${BASE_URL}/users/getUserByEmail/`,
        deleteUser: `${BASE_URL}/users/deleteUser/`,
        searchUser: `${BASE_URL}/users/searchUser/`,
    },
    posts: {
        getAllPosts: `${BASE_URL}/getAllPosts`,
        getPostById: `${BASE_URL}/getPostById/`,
        addPost: `${BASE_URL}/addPost`,
    },
    comments: {
        getAllComments: `${BASE_URL}/getAllComments`,
        getCommentById: `${BASE_URL}/getCommentById/`,
        addComment: `${BASE_URL}/addComment`,
    },
    fileStore: {
        uploadFile: `${BASE_URL}/upload`,
        downloadFile: `${BASE_URL}/download/`,
    },
    mail: {
        sendMail: `${BASE_URL}/registration/`,
    },
    stories: {
        getAllStories: `${BASE_URL}/getAllStories`,
        getStoryById: `${BASE_URL}/getStoryById/`,
        addStory: `${BASE_URL}/addStory`,
    },
};

export default Data;
