import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
const chatStyles = {
  chatBox: {
    display: "flex",
    alignItems: "center",
    marginBottom: 2,
  },
  badge: {
    color: "white",
    boxShadow: "0 0 0 2px white",
  },
  name: {
    color: "primary",
  },
  message: {
    color: "textPrimary",
  },
  time: {
    color: "textSecondary",
  },
};

export const Chat = ({ name, message, time }) => {
  return (
    <Box sx={chatStyles.chatBox}>
      <Badge
        overlap="circular"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        badgeContent=" "
        sx={chatStyles.badge}
      >
        <Avatar>{name.charAt(0)}</Avatar>
      </Badge>
      <Box sx={{ marginLeft: 2 }}>
        <Typography variant="subtitle1" sx={chatStyles.name}>
          {name}
        </Typography>
        <Typography variant="body2" sx={chatStyles.message}>
          {message}
        </Typography>
      </Box>
      <Box sx={{ marginLeft: "auto" }}>
        <Typography variant="caption" sx={chatStyles.time}>
          {time}
        </Typography>
      </Box>
    </Box>
  );
};
