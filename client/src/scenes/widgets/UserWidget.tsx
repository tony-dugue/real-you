import { Box, Divider, Typography, useTheme } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import FlexBetween from "../../components/FlexBetween";
import UserImage from "../../components/UserImage";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useAppSelector } from "../../hooks/custom-redux-hooks";
import User from "../../interfaces/User";
import { useNavigate } from "react-router-dom";
import { Theme } from "@emotion/react";
import { EditOutlined, LocationOnOutlined, ManageAccountsOutlined, WorkOutlineOutlined } from "@mui/icons-material";

type UserWidgetProps = {
  userId: string;
  picturePath: string;
};

const UserWidget: FunctionComponent<UserWidgetProps> = ({
  userId,
  picturePath,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const token = useAppSelector((state) => state.token);

  const navigate = useNavigate();

  const theme: Theme = useTheme();
  const dark = theme.palette.neutral.dark;
  const medium = theme.palette.neutral.medium;
  const main = theme.palette.neutral.main;

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
    <WidgetWrapper>
      {/* FIRST ROW */}
      <FlexBetween
        sx={{ gap: "0.5rem", pb: "1.1rem" }}
        onClick={() => navigate(`/profile/${userId}`)}
      >
        <FlexBetween sx={{ gap: "1rem" }}>
          <UserImage image={picturePath} />
          <Box>
            <Typography
              variant="h4"
              color={dark}
              fontWeight="500"
              sx={{
                "&:hover": {
                  color: theme.palette.primary.light,
                  cursor: "pointer",
                },
              }}
            >
              {user.firstName} {user.lastName}
            </Typography>
            <Typography color={medium}>
              {user.friends?.length} amis
            </Typography>
          </Box>
        </FlexBetween>
        <ManageAccountsOutlined />
      </FlexBetween>

      <Divider />

      {/* SECOND ROW */}
      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <LocationOnOutlined fontSize="large" sx={{ color: main }} />
          <Typography color={medium}>{user.location}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem">
          <WorkOutlineOutlined fontSize="large" sx={{ color: main }} />
          <Typography color={medium}>{user.occupation}</Typography>
        </Box>
      </Box>

      <Divider />

      {/* THIRD ROW */}
      <Box p="1rem 0">
        <FlexBetween sx={{ marginBottom: "0.5rem" }}>
          <Typography color={medium}>Consultations du profil</Typography>
          <Typography color={main} fontWeight="500">
            {user.viewedProfile}
          </Typography>
        </FlexBetween>
        <FlexBetween>
          <Typography color={medium}>Réactions aux messages</Typography>
          <Typography color={main} fontWeight="500">
            {user.impressions}
          </Typography>
        </FlexBetween>
      </Box>

      <Divider />

      {/* FOURTH ROW */}
      <Box p="1rem 0">
        <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
          Profils sociaux
        </Typography>

        <FlexBetween sx={{ marginBottom: "0.5rem", gap: "1rem" }}>
          <FlexBetween sx={{ gap: "1rem" }}>
            <img src="../assets/twitter.png" alt="twitter" />
            <Box>
              <Typography color={main} fontWeight="500">
                Twitter
              </Typography>
              <Typography color={medium}>Réseau social</Typography>
            </Box>
          </FlexBetween>
          <EditOutlined sx={{ color: main }} />
        </FlexBetween>

        <FlexBetween sx={{ gap: "1rem" }}>
          <FlexBetween sx={{ gap: "1rem" }}>
            <img src="../assets/linkedin.png" alt="linkedin" />
            <Box>
              <Typography color={main} fontWeight="500">
                Linkedin
              </Typography>
              <Typography color={medium}>Réseau social professionnel</Typography>
            </Box>
          </FlexBetween>
          <EditOutlined sx={{ color: main }} />
        </FlexBetween>
      </Box>
    </WidgetWrapper>
  );
};

export default UserWidget;
