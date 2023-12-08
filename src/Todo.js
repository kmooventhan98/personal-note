import {
  Avatar,
  Button,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import "./Todo.css";
import React, { useState } from "react";
import db from "./firebase";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";
const CustomIconBtn = styled(IconButton)(({ theme }) => ({
  "&:hover": {
    color: theme.palette.error.main,
  },
}));


function Todo(props) {
  const [input, setInput] = useState('')


  const editTodo = (todo)=> {
    var input = prompt('', todo)
    setInput(input)
    if(input){
      db.collection('todos').doc(props.todo.id).set({
        todo: input
      }, {merge: true})
    }
  }

  return (
    <div className="Todo">
      <ListItem key={props.todo.id} disablePadding>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar
              alt={`Avatar n°${2}`}
              src={`/static/images/avatar/${1}.jpg`}
            />
          </ListItemAvatar>
          <ListItemText primary={props.todo.todo} />
        </ListItemButton>
        <CustomIconBtn aria-label="delete">
          <DeleteIcon
            onClick={(event) =>
              db.collection("todos").doc(props.todo.id).delete()
            }
            className="todo__delete"
          />
        </CustomIconBtn>
          <Button onClick= {()=>editTodo(props.todo.todo)}> Edit </Button>
      </ListItem>
    </div>
  );
}

export default Todo;
