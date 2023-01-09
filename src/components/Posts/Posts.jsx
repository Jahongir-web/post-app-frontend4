import axios from 'axios'
import {Link} from "react-router-dom"
import React, { useEffect, useState } from 'react'
import { useInfoContext } from '../../Context'
import { Post } from '../Post/Post'

export const Posts = ({props}) => {

  const {baseURL, token, posts, setPosts} = useInfoContext() 

  useEffect(()=> {

    const getPosts = async () => {
      try {
        if(props === 'myposts') {
          const res = await axios.get(`${baseURL}my`, {headers: {"access_token": token}})
  
          setPosts(res.data)
        } else {
          const res = await axios.get(`${baseURL}post`, {headers: {"access_token": token}})
    
          setPosts(res.data)
        }
        
      } catch (error) {
        console.log(error);
      }
    }

    getPosts()
  }, [baseURL, token])
  return (
    <div className='posts'>
      <div className="container">
        {
          props === 'myposts' && <Link to="/new">New Post +</Link>
        }

        {
          posts.length > 0 ? 
          <>
            <h1 className='text-center h3 text-primary'>Last Popular Posts</h1>

            <div className="row">
              {
                posts.map((post, i)=> {
                  return (
                    <div key={i} className="col-12 col-md-6 col-lg-4 col-xl-3 p-2">
                      <Post post={post}/>
                    </div>
                  )
                })
              }
              
            </div>

          </> : <>
            <h2>404 Not Found!</h2>
          </>
        }

      </div>
    </div>
  )
}
