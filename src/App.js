import { useState } from "react";

export default function App(){
  return( 
  <div >
   <Mycomponents />
    </div>
    );
}

function Mycomponents(){
  let [message, setMessage] = useState("Tweet here..");
  let [list, setList] = useState([]);

  const tweetHere = () => {
    const newList = [message, ...list];

    setList(newList);
    setMessage("");
  };

  const changeMessage = (e) => {
    const newMessage = e.target.value;
    setMessage(newMessage);
  };

  const deleteTweet = () => {
    list.splice(0,1);
    setList([...list]);
  };

  return (
    <div>
      <h1>Working with Input element</h1>

      <input type="text" value={message} onChange = {changeMessage}/>
      <input type="button" value = "Tweet to everyone" onClick={tweetHere}/>

      <input type="button" value = "Delete Tweet to everyone" onClick={deleteTweet}/>
      <div id="parent">
        {list.map((item) => (
        <div>{item}</div>
      ))}
      </div>
    </div>
  );
}