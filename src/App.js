
import { useInfoContext } from "./Context";
import { ToastContainer } from "react-toastify";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { Route, Routes, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { PostItem } from "./pages/PostItem";
import { MyPosts } from "./pages/MyPosts";
import { Header } from "./components/Header/Header";
import { New } from "./pages/New";
import { Settings } from "./pages/Settings";


function App() {
  const {user, setUser, token, baseURL, show} = useInfoContext()
  
  useEffect(()=> {
    const getUser = async() => {
      const res = await axios(baseURL, {headers: {access_token: token}})
      
      setUser(res.data.user)
    }

    getUser()
  }, [token, baseURL, setUser])


  return (
    <div className="App">

      {show && <Header />}
      
      
      <Routes>
        <Route path="/" element={user ? <Home /> : <Register/>}/>
        <Route path="/post/:id" element={<PostItem/>}/>
        <Route path="/myposts" element={<MyPosts/>}/>
        <Route path="/new" element={<New/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>      
      <ToastContainer/>
    </div>
  );
}

export default App;
