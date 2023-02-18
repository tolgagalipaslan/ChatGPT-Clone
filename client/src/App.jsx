import { useState } from "react";
import ChatBody from "./components/ChatBody";
import ChatInput from "./components/ChatInput";
import {useMutation} from 'react-query'
import { fetchResponse } from "./api";
import { FaRobot } from "react-icons/fa";
function App() {
  const [chat, setChat] = useState([]);
  const [load, setLoad] = useState(false)
  const mutation =useMutation({
    mutationFn:()=>{
      setLoad(true)
      return fetchResponse(chat)
    },
    onSuccess:(data)=>{
      setLoad(false),
      setChat((prev)=>[...prev, {sender:'ai',message:data.message.replace(/^\n\n/,"") }])}
  })
  const sendMessage = async(message)=>{
    await Promise.resolve(setChat((prev)=>[...prev,message]))
    mutation.mutate()
  }
  return (
    <div className="bg-[#343541] h-screen py-6 relative  p-0 sm:px-0 text-white">
      {/*  head    */}
      <div className="uppercase font-bold text-2xl text-center ">CHATGPT CLONE </div>
      {/*  body    */}
      <div>
        <ChatBody chat={chat} load={load} />{" "}
       
      </div>
      {/*  input    */}
      <div>
        <ChatInput sendMessage={sendMessage} />{" "}
      </div>
    </div>
  );
}

export default App;
