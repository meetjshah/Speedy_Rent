import './GroupChat.css';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import {useAuthState} from "react-firebase-hooks/auth"
import {useCollectionData} from "react-firebase-hooks/firestore"
import { useState, useRef } from 'react';
import "./firebase.js"

// firebase.initializeApp({
//   apiKey: "AIzaSyBmWG8V_pKr5jLuymv7rksPzIicWC85pb4",
//   authDomain: "chat-58a40.firebaseapp.com",
//   projectId: "chat-58a40",
//   storageBucket: "chat-58a40.appspot.com",
//   messagingSenderId: "536591180211",
//   appId: "1:536591180211:web:2641d0ecfd6abd88452bc6",
//   measurementId: "G-Z77ZJME7G8"
// })

const auth = firebase.auth();
const firestore = firebase.firestore();

function GroupChat() {

  const [user] = useAuthState(auth);

  return (
    <div className="GroupChat">
      <header>
        {/* <h1>⚛️🔥💬</h1> */}
        <h1>Chat</h1>
        {/* <SignOut /> */}
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      {/* <p>Do not violate the community guidelines or you will be banned for life!</p> */}
    </>
  )

}

// function SignOut() {
//   return auth.currentUser && (
//     <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
//   )
// }


function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })  

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form className="formGroupChat" onSubmit={sendMessage}>

      <input className="forminput" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something" />

      <button className="formbutton" type="submit" disabled={!formValue}>Send</button>

    </form>
  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
     <div className="img1">
      <img  src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt="" />
      </div>
      <p>{text}</p>
    </div>
  </>)
}


export default GroupChat;
