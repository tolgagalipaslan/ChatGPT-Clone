import React, { useEffect, useRef } from "react";

import { AiOutlineUser } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { FaRobot } from "react-icons/fa";

const ChatBody = ({chat,load}) => {
  const aiStyle ="bg-[#40414f] text-[#d1d5c1]"

  // useRef kullanarak chatDiv elementine referans oluşturuyoruz
  const chatDivRef = useRef(null);

  // useEffect kullanarak chatDiv'in scroll pozisyonunu ayarlıyoruz
  useEffect(() => {
    chatDivRef.current.scrollTop = chatDivRef.current.scrollHeight;
  }, [chat]);
  return (
    <div className="chat-wrapper chat-div flex flex-col gap-4 p-0  h-[85vh] overflow-y-auto mt-auto  " ref={chatDivRef}>
      {/* BENIM MESAJ */}
    { chat?.map((message,i)=>{
     
         return(
          
          <div key={i} className={` bg-[#343541] px-3 py-3   w-full  break-words text-[#e0ecf1] border-black/10 dark:border-gray-800   ${message.sender==="ai" && aiStyle }`}>
          <div className="text-base gap-4 md:gap-6 m-auto md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0">
            {/* RESIM */}
           
          
            <div className="w-[30px] flex flex-col relative items-end">
              <div className="relative flex ">
                <span className="   ">
                 {message.sender==="ai" ?   <FaRobot className="text-4xl p-1 bg-green-600"/>: <AiOutlineUser className="text-4xl p-1 bg-[#014229]" />}
                </span>
              </div>
            </div>
            {/* YAZI */}
            <div className="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
              <div className="flex flex-grow-0 flex-col gap-3">
                <div className="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap">{message.message}
                </div>
              
              </div>
            </div>
          </div>
        </div>

          
       


         )
        })
    }
       

     

     

   {load ? 
     <div  className={` bg-[#40414f] px-3 py-3   w-full  break-words text-[#d1d5c1] border-black/10 dark:border-gray-800  `}>
     <div className="text-base gap-4 md:gap-6 m-auto md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0">
       {/* RESIM */}
      
     
       <div className="w-[30px] flex flex-col relative items-end">
         <div className="relative flex ">
           <span className="   ">
             <FaRobot className="text-4xl p-1 bg-green-600"/>
           </span>
         </div>
       </div>
       {/* YAZI */}
       <div className="relative flex w-[calc(100%-50px)] flex-col gap-3 md:gap- lg:w-[calc(100%-115px)]">
         <div className="flex flex-grow-0 flex-col gap-1">
           <div className="min-h-[20px] flex items-start gap-1 whitespace-pre-wrap">is Typing <span className="transition animate-bounce ">.</span><span className="transition animate-bounce  ">.</span><span className="transition animate-bounce  ">.</span>
           </div>
         
         </div>
       </div>
     </div>
   </div> 
  :null
  }
   
 
  

    </div>
  );
};

export default ChatBody;
