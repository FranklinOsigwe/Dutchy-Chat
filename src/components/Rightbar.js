import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import React from 'react';


function Rightbar() {
  return (
    <Box flex={2} p={3} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography varient="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="data:image/jpeg;base64,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" />
          <Avatar alt="Travis Howard" src="https://hips.hearstapps.com/hmg-prod/images/ros-1502923929.png?crop=1.00xw:0.334xh;0,0&resize=1200:*" />
          <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtrjyOKMThRJswpty-_pygdZnK4m1iWsEeCA&usqp=CAU" />
          <Avatar alt="Agnes Walker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwMdN9bcN50QFs79mdl_PUbdhNRfXqrMVjeA&usqp=CAU" />
          <Avatar alt="Trevor Henderson" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-DJV2vRT-1dVGvCe7UnlaXHKHpNxY2rhd3A&usqp=CAU" />
        </AvatarGroup>

        <Typography varient="h6" fontWeight={100} mt={2} mb={2}>
          Latest News  
        </Typography>

        <ImageList>
          <ImageListItem>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMIfncXHe-atlzrj4f4vVgzebKKR8XYobH5g&usqp=CAU" alt=""/>
          </ImageListItem>
          <ImageListItem>
            <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/11/Enjoy-the-Zanzibar-Islands1.jpg" alt=""/>
          </ImageListItem>
          <ImageListItem>
            <img src="https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/12/OG-for-african-islands.jpg" alt=""/>
          </ImageListItem>
          <ImageListItem>
            <img src="https://d.newsweek.com/en/full/2096815/astronaut-spaceman-do-spacewalk.webp?w=737&f=36e52af42c45bb6d950eb43b5a61e1cd" alt=""/>
          </ImageListItem>
          <ImageListItem>
            <img src="https://images2.minutemediacdn.com/image/upload/c_crop,w_1024,h_576,x_0,y_0/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/theduel_en_international_web/01gtyvp1ejsv6x6cqqtw.jpg" alt=""/>
          </ImageListItem>
        </ImageList>

        <Typography varient="h6" fontWeight={100} mt={2} >
          Latest Conversations 
        </Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  );
}

export default Rightbar;
