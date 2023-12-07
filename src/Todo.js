import {
  Avatar,
  Checkbox,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import "./Todo.css";
import React from "react";
const value = 1;

function Todo(props) {
  return (
    <div className="Todo">
      <ListItem
        key={value}
        secondaryAction={<Checkbox edge="end" />}
        disablePadding
      >
        <ListItemButton>
          <ListItemAvatar>
            <Avatar
              alt={`Avatar n°${2}`}
              src={`/static/images/avatar/${value + 1}.jpg`}
            />
          </ListItemAvatar>
          <ListItemText
            primary={props.text}
            secondary={props.text.length + " words"}
          />
        </ListItemButton>
      </ListItem>
    </div>
  );
}

export default Todo;
