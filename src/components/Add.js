import {
  Fab,
  Tooltip,
  styled,
  Modal,
  Typography,
  Avatar,
  TextField,
  ButtonGroup,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import {
  Add as AddIcon,
  EmojiEmotions,
  VideoCameraBack,
  Image,
  PersonAdd,
  DateRange,
} from "@mui/icons-material";
import Box from "@mui/material/Box";
import { Stack } from "@mui/system";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "20px ",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});

function Add() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal
        open={open}
        onClick={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor={'background.default'} color={'text.primary'} p={3} borderRadius={5}>
          <Typography variant="h6" color="gray" textAlign="center">
            {" "}
            Create Post
          </Typography>

          <UserBox>
            <Avatar
              src="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
              sx={{ width: 30, height: 30 }}
            />

            <Typography fontWeight={500} pl={2}>
              Franklin D
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            //   label="Multiline"
            multiline
            rows={3}
            placeholder="What's on your mind"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={3} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>

          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
}

export default Add;
