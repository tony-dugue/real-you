import React, { FunctionComponent } from "react";
import {
  EditOutlined,
  DeleteOutlined,
  AttachFileOutlined,
  GifBoxOutlined,
  ImageOutlined,
  MicOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Typography,
  InputBase,
  useTheme,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import Dropzone, { FileWithPath } from "react-dropzone";
import UserImage from "../../components/UserImage";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setPosts } from "../../store/rootSlice";
import { useAppSelector } from "../../hooks/custom-redux-hooks";
import { Theme } from "@emotion/react";

type AddPostWidgetProps = {
  picturePath: string;
  userId: string;
};

const AddPostWidget: FunctionComponent<AddPostWidgetProps> = ({
  picturePath,
  userId,
}) => {
  const dispatch = useDispatch();
  const token = useAppSelector((state) => state.token);

  const isNonMobile: boolean = useMediaQuery<string>("(min-width: 1000px)");

  const { palette }: Theme = useTheme();
  const mediumMain = palette.neutral.mediumMain;
  const medium = palette.neutral.medium;

  const [isImage, setIsImage] = useState<boolean>(false);
  const [image, setImage] = useState<FileWithPath | null>(null);
  const [post, setPost] = useState<string>("");

  const handlePost = async () => {
    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("description", post);
    if (image) {
      formData.append("picture", image);
      formData.append("picturePath", image.name);
    }

    const response = await fetch(`http://localhost:3001/posts`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });
    const posts = await response.json();
    dispatch(setPosts({ posts }));
    setImage(null);
    setPost("");
  };

  return (
    <WidgetWrapper>
      <FlexBetween sx={{ gap: "1.5rem" }}>
        <UserImage image={picturePath} />
        <InputBase
          placeholder="Votre message..."
          onChange={(e) => setPost(e.target.value)}
          value={post}
          sx={{
            width: "100%",
            backgroundColor: palette.neutral.light,
            borderRadius: "2rem",
            padding: "1rem 2rem",
          }}
        />
      </FlexBetween>
      {isImage && (
        <Box
          border={`1px solid ${medium}`}
          borderRadius="5px"
          mt="1rem"
          p="1rem"
        >
          <Dropzone
            accept={{ "image/jpeg": [".jpg", ".jpeg", ".png"] }}
            multiple={false}
            onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
          >
            {({ getRootProps, getInputProps }) => (
              <FlexBetween>
                <Box
                  {...getRootProps()}
                  border={`2px dashed ${palette.primary.main}`}
                  p="1rem"
                  width="100%"
                  sx={{ "&:hover": { cursor: "pointer" } }}
                >
                  <input {...getInputProps()} />
                  {!image ? (
                    <p>Ajouter une image ici ...</p>
                  ) : (
                    <FlexBetween>
                      <Typography>{image.name}</Typography>
                      <EditOutlined />
                    </FlexBetween>
                  )}
                </Box>
                {image && (
                  <IconButton
                    onClick={() => setImage(null)}
                    sx={{ width: "15%" }}
                  >
                    <DeleteOutlined />
                  </IconButton>
                )}
              </FlexBetween>
            )}
          </Dropzone>
        </Box>
      )}

      <Divider sx={{ margin: "1.25rem 0" }} />

      <FlexBetween>
        <FlexBetween
          sx={{ gap: "0.25rem" }}
          onClick={() => setIsImage(!isImage)}
        >
          <ImageOutlined sx={{ color: mediumMain }} />
          <Typography
            color={mediumMain}
            sx={{ "&:hover": { cursor: "pointer", color: medium } }}
          >
            Image
          </Typography>
        </FlexBetween>

        {isNonMobile ? (
          <>
            <FlexBetween sx={{ gap: "0.25rem" }}>
              <GifBoxOutlined sx={{ color: mediumMain }} />
              <Typography color={mediumMain}>Clip</Typography>
            </FlexBetween>

            <FlexBetween sx={{ gap: "0.25rem" }}>
              <AttachFileOutlined sx={{ color: mediumMain }} />
              <Typography color={mediumMain}>Pièce jointe</Typography>
            </FlexBetween>

            <FlexBetween sx={{ gap: "0.25rem" }}>
              <MicOutlined sx={{ color: mediumMain }} />
              <Typography color={mediumMain}>Audio</Typography>
            </FlexBetween>
          </>
        ) : (
          <FlexBetween sx={{ gap: "0.25rem" }}>
            <MoreHorizOutlined sx={{ color: mediumMain }} />
          </FlexBetween>
        )}

        <Button
          disabled={!post}
          onClick={handlePost}
          variant="contained"
          sx={{
            color: palette.background.alt,
            backgroundColor: palette.primary.main,
            borderRadius: "3rem",
          }}
        >
          PUBLIER
        </Button>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default AddPostWidget;
