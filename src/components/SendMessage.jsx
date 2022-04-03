import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import { auth, db } from "../firebase";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

function SendMessage({ scroll }) {
  const [message, setMessage] = useState("");
  const sendMsg = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await db.collection("messages").add({
      text: message,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <form onSubmit={sendMsg}>
        <Input
          style={{
            width: "78%",
            fontSize: "15px",
            fontWeight: "550",
            marginLeft: "5px",
            marginBottom: "-3px",
          }}
          placeholder="Message..."
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          style={{
            width: "18%",
            fontSize: "15px",
            fontWeight: "550",
            margin: "4px 5% -13px 5%",
            maxWidth: "200px",
          }}
          type="submit"
        >
          Send
        </Button>
      </form>
    </div>
  );
}

export default SendMessage;
