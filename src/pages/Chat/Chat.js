import React, { useState, useEffect, useMemo, useRef } from "react";
import { db, auth } from "../../services/firebase";
import "./Chat.scss";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const Chat = () => {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState();

  const user = useMemo(() => auth().currentUser, []);
  const messagesRef = useRef();
  const inputRef = useRef();
  const firstRender = useRef(true);

  useEffect(() => {
    inputRef.current.focus();
    try {
      db.ref("chats")
        .limitToLast(4)
        .on("value", (snapshot) => {
          const chats = Object.values(snapshot.val());

          setMessages(
            firstRender.current
              ? chats
              : (prevMessages) => [...prevMessages, chats[chats.length - 1]]
          );

          messagesRef.current.scrollTo(0, messagesRef.current.scrollHeight);
          firstRender.current = false;
        });
    } catch (error) {
      setError(error.message);
      console.error({ error });
    }
  }, []);

  const onNewMessageSubmit = async (e) => {
    e.preventDefault();

    if (!newMessage) return;

    try {
      await db.ref("chats").push({
        content: newMessage,
        timestamp: Date.now(),
        uid: user.uid,
      });
      setNewMessage("");
      messagesRef.current.scrollTo(0, messagesRef.current.scrollHeight);
    } catch (error) {
      setError(error.message);
      console.error({ error });
    }
  };

  return (
    <div className="chat">
      <div className="container">
        <ul className="messages" ref={messagesRef}>
          <li>
            <span className="username" style={{ color: "yellow" }}>
              SERVER
            </span>
            <p className="message">Welcome to Piper Chat!</p>
          </li>
          {messages.map((message) => (
            <li key={"" + message.timestamp + message.uid}>
              <span
                className="username"
                style={user.uid === message.uid ? { color: "#03A9F4" } : {}}
              >
                {new Date(message.timestamp).toLocaleTimeString()}
                {user.uid === message.uid && " (YOU)"}
              </span>
              <p className="message">{message.content}</p>
            </li>
          ))}
          <ErrorMessage>{error}</ErrorMessage>
        </ul>
        <form>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            ref={inputRef}
          />
          <button onClick={onNewMessageSubmit}>></button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
