import React from "react";
import { FiSend } from "react-icons/fi";
import { useState } from "react";

const ChatInput = ({sendMessage}) => {
    const [value, setvalue] = useState("")

    //send message 
    //sendMessage
   
    //submit

    const handleSubmit = (e)=>{
        e.preventDefault()
        if (value==="")return;
        sendMessage({sender:"user",message:value})
        setvalue("")
    }
  return (
    <div>
      <div className="absolute bottom-0 left-0 w-full  md:border-t-0  md:border-transparent md:dark:border-transparent   ">
        <form
          action=""
          className=" items-stretch mx-2 flex flex-row gap-3 pt-2 last:mb-2 md:last:mb-6 lg:mx-auto lg:max-w-3xl lg:pt-6"
        >
          <div className="flex flex-col w-full py-2 flex-grow md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]  ">
            <div className="flex gap-1 ">
              <textarea
                name=""
                id=""
                type="text"
                value={value}
                onKeyDown={(e)=>{
                    e.keyCode===13 && e.shiftKey===false && handleSubmit(e);
                }}
                onChange={(e)=>setvalue(e.target.value)}
                cols="30"
                rows="1"
                className="m-0 w-full resize-none border-0 bg-transparent  p-0 pl-2 pr-7 focus:ring-0 focus-visible:ring-0 md:pl-0  outline-none max-h-[200px]  h-[24px] overflow-y-hidden  "
              ></textarea>
              <button onClick={(e)=>{
                handleSubmit(e)
              }} className="absolute p-1 right-1 bottom-1.5 md:right-2   rounded  hover:bg-gray-900 disabled:hover:bg-transparent">
                {" "}
                <FiSend />{" "}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatInput;
