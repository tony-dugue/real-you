import React, { FunctionComponent } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/custom-redux-hooks";
import Navbar from "../navbar";
import UserWidget from "../widgets/UserWidget";
import FriendListWidget from "../widgets/FriendListWidget";
import PostsWidget from "../widgets/PostsWidget";
import AddPostWidget from "../widgets/AddPostWidget";
import User from "../../interfaces/User";

const ProfilePage: FunctionComponent = () => {
  const [user, setUser] = useState<User | null>(null);
  const { userId } = useParams();
  const token = useAppSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) return null;

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="2rem"
        justifyContent="center"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          {user && (
            <UserWidget userId={user._id} picturePath={user.picturePath} />
          )}
          <Box m="2rem 0" />
          {user && <FriendListWidget userId={user._id} />}
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          {user && (
            <>
              <AddPostWidget userId={user._id} picturePath={user.picturePath} />
              <PostsWidget userId={user._id} />
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
