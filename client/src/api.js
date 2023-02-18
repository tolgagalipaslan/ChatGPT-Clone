export const fetchResponse = async(chat)=>{
    try {
        const response = await fetch('https://chatgpt-clone-backend-wsbp.onrender.com',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                message :chat.map((message)=>message.message).join(" \n ")
            })
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}