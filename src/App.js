import React from "react";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Add from "./components/Add";
import Feed from "./components/Feed";
import {Box,Stack} from '@mui/material'


function App() {
  return (
    <Box > 
      <Navbar />

      <Stack direction={'row'} spacing={3} justifyContent={'space-between'}>
      <Sidebar/>
      <Feed/>  
        <Rightbar />
        <Add/>
      </Stack>

    </Box>
  );
}

export default App;
