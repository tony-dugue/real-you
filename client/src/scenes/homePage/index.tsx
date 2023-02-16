import React, { FunctionComponent } from "react";
import { Box, useMediaQuery } from "@mui/material";
import Navbar from "../navbar";
import { useAppSelector } from "../../hooks/custom-redux-hooks";
import UserWidget from "../widgets/UserWidget";

const HomePage: FunctionComponent = () => {

  const isNonMobile = useMediaQuery("(min-width:1000px)");
  const user = useAppSelector((state) => state.user);

  return (
    <Box>
      <Navbar />

      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobile ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobile ? "26%" : undefined}>
        { user && <UserWidget userId={user._id} picturePath={user.picturePath} /> }
        </Box>

        <Box flexBasis={isNonMobile ? "42%" : undefined} mt={isNonMobile ? undefined : "2rem"}>
          colonne milieu
        </Box>

        {isNonMobile && (
          <Box flexBasis="26%">
            colonne droite
          </Box>
        )}
      </Box>
    </Box>
  )
};

export default HomePage;


