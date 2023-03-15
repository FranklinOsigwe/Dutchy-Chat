import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Badge,
  Menu,
  MenuItem,
} from "@mui/material";

import {useState} from 'react'

import MailIcon from "@mui/icons-material/Mail";
import SendIcon from "@mui/icons-material/Send";
import Notifications from "@mui/icons-material/Notifications";
// import Avatar from "@mui/icons-material";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({ display: "flex", gap: "20px" }));
const UserBox = styled(Box)(({ theme }) => ({ display: "flex", gap: "10px" }));

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography varient="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          {" "}
          <SendIcon /> Dutchy Chat{" "}
        </Typography>
        <SendIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>

          <Badge badgeContent={2} onClick={(e) => setOpen(true)}  color="error">
            <Notifications />
          </Badge>

        </Icons>
        <UserBox>
          <Typography variant="span">Hi, Franklin</Typography>
        </UserBox>
      </StyledToolBar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose ={e => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
