import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from "../../hooks/custom-redux-hooks";
import { setPosts } from '../../store/rootSlice';
import PostWidget from './PostWidget';

type PostsWidgetProps = {
  userId: string;
  isProfile?: boolean;
};

const PostsWidget: FunctionComponent<PostsWidgetProps> = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useAppSelector((state) => state.posts);
  const token = useAppSelector((state) => state.token);

  const getPosts = async () => {
    const response = await fetch("http://localhost:3001/posts", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  };

  const getUserPosts = async () => {
    const response = await fetch(
      `http://localhost:3001/posts/${userId}/posts`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  };

  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {userId && posts.map(
        (post) => (
          <PostWidget
            key={post._id}
            _id={post._id}
            postUserId={post.userId}
            userId={userId}
            description={post.description}
            location={post.location}
            picturePath={post.picturePath}
            userPicturePath={post.userPicturePath}
            likes={post.likes}
            comments={post.comments}
            firstName={post.firstName}
            lastName={post.lastName}
          />
        )
      )}
    </>
  );
};

export default PostsWidget;
