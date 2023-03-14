import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Badge,
} from "@mui/material";

import MailIcon from '@mui/icons-material/Mail';
import SendIcon from "@mui/icons-material/Send";

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
const Icons = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
}));

function Navbar() {
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
          <Badge badgeContent={4} color="primary">
            <MailIcon sx={{ width:'max-width'}} />
          </Badge>
        </Icons>
      </StyledToolBar>
    </AppBar>
  );
}

export default Navbar;
