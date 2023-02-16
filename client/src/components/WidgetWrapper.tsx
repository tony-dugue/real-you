import { FunctionComponent } from "react";
import { Box, useTheme } from "@mui/material";
import { Theme } from "@emotion/react";

type Props = {
  children?: React.ReactNode;
  sx?: {};
  onClick?: () => void;
};

const WidgetWrapper: FunctionComponent<Props> = ({ children, sx }) => {
  const theme: Theme = useTheme();
  
  return (
    <Box
      sx={{
        padding: "1.5rem 1.5rem 0.75rem 1.5rem",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.75rem",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default WidgetWrapper;
