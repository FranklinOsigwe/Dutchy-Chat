import { Box } from "@mui/material";
import Post from "./Post";

function Feed() {
  return (
    <Box flex={4} p={2}>
      <Post
        image="https://static01.nyt.com/images/2019/04/16/sports/16onsoccerweb-2/merlin_153612873_5bb119b9-8972-4087-b4fd-371cab8c5ba2-superJumbo.jpg"
        alt="Paella dish"
      />
    </Box>
  );
}

export default Feed;
