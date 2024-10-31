import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './containers/home/Home';
import Search from './containers/search/Search';
import Post from './containers/post/Post';
import Profile from './containers/profile/Profile';
import SignIn from './containers/signIn/SignIn';
import SignUp from './containers/signUp/SignUp';

function App() {
  return (
    <div className="App">
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/createPost" element={<Post />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/editProfile" element={<Profile />} />
            </Routes>
          </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
