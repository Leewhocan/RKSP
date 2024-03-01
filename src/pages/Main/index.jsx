import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Chat } from "../../components/chat/index";
import Typography from "@mui/material/Typography";
import React, { useState } from "react"; // ?

const chatData = [
  { name: "John", message: "Hey there!", time: "10:00 AM" },
  { name: "Alice", message: "How are you?", time: "10:15 AM" },
  { name: "Bob", message: "What's up?", time: "10:30 AM" },
];

const containerStyle = {
  backgroundColor: "white",
  border: "2px solid black",
  position: "fixed",
  left: 0,
  height: "100%",
  width: "240px",
  padding: "0px",
};
const typographyStyle = {
  borderBottom: "1px solid lightGrey",
  marginBottom: "12px",
};

const gridStyle = {
  borderBottom: "1px solid lightGrey",
  padding: "4px",
  marginBottom: "12px",
};

const dialogSyle = {
  width: "480px",
  marginLeft: "240px",
};

export const ChatPage = () => {
  return (
    <Container style={containerStyle}>
      <Typography style={typographyStyle}>CHATS</Typography>
      <Grid container>
        {chatData.map((chat, index) => (
          <Grid
            style={gridStyle}
            item
            xs={12}
            key={index}
            // Add onClick handler
          >
            <Chat {...chat} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
