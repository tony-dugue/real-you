import React, { FunctionComponent } from "react";
import { Box } from "@mui/material";

type Props = {
  children?: React.ReactNode;
  sx?: {};
  onClick?: () => void;
};

const FlexBetween: FunctionComponent<Props> = ({ children, sx, onClick }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        ...sx,
      }}
      onClick={onClick}
    >
      {children}
    </Box>
  );
};

export default FlexBetween;
