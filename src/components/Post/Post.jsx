import {CommentOutlined, DislikeOutlined, LikeOutlined} from "@ant-design/icons"
import React from 'react'
import { useNavigate } from "react-router-dom"
import { Button, Card, CardBody, CardText, CardTitle } from 'reactstrap'

import "./Post.css"

export const Post = ({post}) => {

  const navigate = useNavigate()

  const showPost = (e) => {
    console.log();
    navigate(`/post/${e.target.id}`)
  }
  return (
    <Card style={{ width: '100%'}} >
      <img alt="Sample" src={post?.image?.url} className="img-fluid post-img" />
      <CardBody>
        <CardTitle tag="h5">
          {post?.title}
        </CardTitle>
        <CardText className="text-truncate" style={{height: "50px", overflow: "hidden"}}>
          {post?.content}
        </CardText>
        <div className="btn-box-post d-flex gap-1 justify-content-between">
          <Button>
            <LikeOutlined /> {post?.like?.length}
          </Button>
          <Button>
            <DislikeOutlined /> {post?.dislike?.length}
          </Button>
          <Button>
            <CommentOutlined /> {post?.comments?.length}
          </Button>
          <Button onClick={showPost} id={post?._id} >
            More
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}
