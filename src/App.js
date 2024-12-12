import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './containers/home/Home';
import Search from './containers/search/Search';
import CreatePost from './containers/post/CreatePost';
import Profile from './containers/profile/Profile';
import SignIn from './containers/signIn/SignIn';
import SignUp from './containers/signUp/SignUp';
import Settings from './containers/settings/Settings';

function App() {
  return (
    <div className="App">
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/createPost" element={<CreatePost />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/editProfile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
