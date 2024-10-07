import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import {
  Face as FaceIcon,
  AlternateEmail as UserNameIcon,
  CalendarMonth as CalenderIcon,
} from "@mui/icons-material";
import moment from 'moment'      

const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }}
      />
      <ProfileCard heading={"Bio"} text={"Lets do double suicide"} />
      <ProfileCard heading={"Username"} text={"@No_Longer_Human"} Icon={UserNameIcon}/> 
      <ProfileCard heading={"Name"} text={"Random chodu"} Icon={FaceIcon}/>
      <ProfileCard heading={"Joined"} text={moment('2023-11-05T00:00:00.000Z').fromNow()} Icon={FaceIcon}/>
    </Stack>
  );
};

const ProfileCard = ({ text, Icon, heading }) => {
  return (
    <div>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"1rem"}
        color={"white"}
        textAlign={"center"}
      >
        {Icon && <Icon/>}
        <Stack>
          <Typography variant="body1">{text}</Typography>
          <Typography variant="caption" color={"grey"}>
            {heading}
          </Typography>
        </Stack>
      </Stack>
    </div>
  );
};

export default Profile;
