import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Favorite from "@mui/icons-material/Favorite";
import Share from "@mui/icons-material/Share";
import MoreVert from "@mui/icons-material/MoreVert";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

function Post() {
  return (
      <div>
          <Card sx={{margin:5}}> 
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red"[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Sky Sports News"
          subheader="September 14, 2022"
        />
        <CardMedia
          component="img"
          height="30%"
          image="https://static01.nyt.com/images/2019/04/16/sports/16onsoccerweb-2/merlin_153612873_5bb119b9-8972-4087-b4fd-371cab8c5ba2-superJumbo.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Lionel Messi of Argentina is undoubtedly the GOAT of football in the
            21st century. The acronym GOAT stands for Greatest of All Time and
            Messi is unquestionably the greatest of all time when it comes to
            football in the modern era.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}} />} />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
          <Card sx={{margin:5}}> 
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red"[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Sky Sports News"
          subheader="September 14, 2022"
        />
        <CardMedia
          component="img"
          height="30%"
          image="https://i.pinimg.com/originals/15/fd/0c/15fd0c4366e8bca0821e8f81cfe1983c.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Lionel Messi of Argentina is undoubtedly the GOAT of football in the
            21st century. The acronym GOAT stands for Greatest of All Time and
            Messi is unquestionably the greatest of all time when it comes to
            football in the modern era.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}} />} />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  )
}

export default Post