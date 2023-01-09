import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useInfoContext } from '../../Context'
import Logo from "../../images/logo.png"


export const Header = (args) => {

  const {user, baseURL, setUser, setShow, posts, setPosts} = useInfoContext()

  const [activeLink, setActiveLink] = useState('Home')

  const [title, setTitle] = useState("")

  console.log(title);

  const searchPosts = async(e) => {
    e.preventDefault()

    try {
      const res = await axios.get(`${baseURL}search?title=${title}`)
      console.log(res);
      setPosts(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const logOut = () => {
    localStorage.clear()
    setShow(false)
    setUser(null)
  }

  const isActive = (e) => {
    setActiveLink(e.target.textContent)
  }

  return (
    <header>
      <div className='container'>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className='rounded-circle' src={Logo} alt="logo" width={60} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link onClick={isActive} className={activeLink === 'Home' ? "nav-link mx-2 active" : "nav-link mx-2"} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link onClick={isActive} className={activeLink === 'My posts' ? "nav-link mx-2 active" : "nav-link mx-2"} to="/myposts">My posts</Link>
              </li>
              <li className="nav-item">
                <Link onClick={isActive} className={activeLink === 'Settings' ? "nav-link mx-2 active" : "nav-link mx-2"} to="/settings">Settings</Link>
              </li>
              <li className="nav-item">
                <Link onClick={logOut} className="nav-link text-danger mx-2 me-5" to="/register">Log out</Link>
              </li>              
            </ul>
            <form onSubmit={searchPosts} className="d-flex mb-4 mb-md-0">
              <input onChange={handleTitle} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <span className="profile ms-md-3 bg-success p-2 text-white mt-5 mt-md-0 ms-0 rounded-3 fw-bold">{user?.name}</span>
          </div>
        </div>
      </nav>
      </div>
    </header>
    
  )
}
