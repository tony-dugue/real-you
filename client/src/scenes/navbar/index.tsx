import React, { FunctionComponent, useState } from "react";
import {
  Box,
  FormControl,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Theme } from "@emotion/react";
import FlexBetween from "../../components/FlexBetween";
import {
  Close,
  DarkMode,
  Dehaze,
  Help,
  LightMode,
  Message,
  Notifications,
  Search,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/custom-redux-hooks";
import { setLogout, setMode } from "../../store/rootSlice";

const Navbar: FunctionComponent = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] =
    useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const theme: Theme = useTheme();
  const isNonMobile: boolean = useMediaQuery<string>("(min-width: 1000px)");

  const user = useAppSelector((state) => state.user);

  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryDefault = theme.palette.primary.main;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  const fullName = user ? `${user?.firstName} ${user?.lastName}` : "Prénom Nom";

  return (
    <FlexBetween sx={{ padding: "1rem 6%", backgroundColor: alt }}>
      <FlexBetween sx={{ gap: "1.75rem" }}>
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
          onClick={() => navigate("/home")}
          sx={{ "&:hover": { color: primaryLight, cursor: "pointer" } }}
        >
          Real You
        </Typography>
        {isNonMobile && (
          <FlexBetween
            sx={{
              backgroundColor: neutralLight,
              borderRadius: "9px",
              gap: "3rem",
              padding: "0.1rem 1.5rem",
            }}
          >
            <InputBase placeholder="Rechercher..." />
            <IconButton>
              <Search sx={{ color: primaryDefault }} />
            </IconButton>
          </FlexBetween>
        )}
      </FlexBetween>

      {/* DESKTOP NAV */}
      {isNonMobile ? (
        <FlexBetween sx={{ gap: "2rem" }}>
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px", color: primaryDefault }} />
            ) : (
              <LightMode sx={{ fontSize: "25px", color: primaryDefault }} />
            )}
          </IconButton>
          <Message sx={{ fontSize: "25px", color: primaryDefault }} />
          <Notifications sx={{ fontSize: "25px", color: primaryDefault }} />
          <Help sx={{ fontSize: "25px", color: primaryDefault }} />
          <FormControl variant="standard">
            <Select
              value={fullName}
              sx={{
                backgroundColor: neutralLight,
                width: "auto",
                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": { pr: "0.25rem", width: "3rem" },
                "& .MuiSelect-select:focus": { backgroundColor: neutralLight }
              }}
              input={<InputBase />}
            >
              <MenuItem value={fullName}>
                <Typography>{fullName}</Typography>
              </MenuItem>
              <MenuItem onClick={() => dispatch(setLogout())}>
                Se déconnecter
              </MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Dehaze />
          <Menu open={isMobileMenuToggled} />
        </IconButton>
      )}

      {/* MOBILE NAV */}
      {!isNonMobile && isMobileMenuToggled && (
        <Box
          sx={{
            position: "fixed",
            right: "0",
            bottom: "0",
            height: "100%",
            zIndex: "10",
            maxWidth: "500px",
            minWidth: "300px",
            backgroundColor: background,
          }}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "3rem",
            }}
          >
            <IconButton
              onClick={() => dispatch(setMode())}
              sx={{ fontSize: "25px" }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: "25px" }} />
              )}
            </IconButton>
            <Message sx={{ fontSize: "25px" }} />
            <Notifications sx={{ fontSize: "25px" }} />
            <Help sx={{ fontSize: "25px" }} />
            <FormControl variant="standard">
              <Select
                value={fullName}
                sx={{
                  backgroundColor: neutralLight,
                  width: "auto",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": { pr: "0.25rem", width: "3rem" },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>
                  Se déconnecter
                </MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
};

export default Navbar;
