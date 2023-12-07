import React, { useEffect, useState } from "react";
import "./App.css";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Todo from "./Todo";
import db from "./firebase";
import firebase from 'firebase/compat/firestore';



function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //when the app load fetch from firestore(db)
  useEffect(() => {
    // this will exec when app loads

    db.collection("todos").orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
      // console.group('my snapshot')
      // console.log(snapshot.docs.map((doc) => doc.data().todo));
      setTodos(snapshot.docs.map((doc) => doc.data().todo));
    });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    db.collection('todos').add({
      todo: input,
      // timestamp: new Date().getTime()
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([input, ...todos]);
    setInput("");
  };
  return (
    <div className="App">
      <form action="">
        <h1>Simple Todo</h1>
        <TextField
          id="standard-basic"
          label="Enter a item"
          variant="standard"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          type="submit"
          onClick={addTodo}
          disabled={!input}
        >
          Send
        </Button>{" "}
        <>{}</>
        <Button variant="contained" onClick={() => window.location.reload()}>
          Hard Refresh
        </Button>
        <ul>
          {todos.map((todo) => (
            <Todo text={todo} id={Date.now()} />
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
