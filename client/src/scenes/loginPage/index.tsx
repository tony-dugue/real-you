import React, { FunctionComponent } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Theme } from "@emotion/react";
import Form from "./Form";

const LoginPage: FunctionComponent = () => {
  const theme: Theme = useTheme();
  const isNonMobile: boolean = useMediaQuery<string>("(min-width: 1000px)");

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          backgroundColor: theme.palette.background.alt,
          p: "1rem 6%",
          textAlign: "center",
        }}
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">Real You</Typography>
      </Box>

      <Box
        sx={{
          width: isNonMobile ? "50%" : "93%",
          p: "2rem",
          m: "2rem auto",
          borderRadius: "1.5rem",
          backgroundColor: theme.palette.background.alt,
        }}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Bienvenue sur Real You, le réseau social qui vous montre comme vous êtes !
        </Typography>

        <Form />

        <Typography fontWeight="500" variant="h4" sx={{ mt: "1.5rem" }}>
          Be Real, Be You ...
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
