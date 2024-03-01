import React from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
export const DialogPage = () => {
  return (
    <div>
      <Paper>
        <div>
          <Avatar src="url_аватарки_пользователя" />
          <p>Текст сообщения</p>
        </div>

        <div>
          <Avatar src="url_аватарки_другого_пользователя" />
          <p>Текст сообщения</p>
        </div>
      </Paper>

      <TextField label="Введите сообщение" />
    </div>
  );
};

export default DialogPage;
