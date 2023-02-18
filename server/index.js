import express, { response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import env from 'dotenv'
import { Configuration, OpenAIApi } from 'openai'
const app = express()
env.config();
app.use(cors());
app.use(bodyParser.json());

//API BAGLAMA KISMI 

const configuration =new  Configuration ({
    organization:"org-umeGq29kSQiRoPY4xd5hiRPG",
    apiKey:process.env.API_KEY,
})
const openai = new OpenAIApi(configuration)
//API BAGLAMA KISMI 




app.listen("8080",()=>console.log("geldim iste burdayim yuzun gulsun bee!!"))
app.get("/",(req,res)=>{
    res.send("ALLAH!")
})

//POST KISMI 

app.post("/", async(req,res)=>{
const {message} = req.body;
try {
    const response =await openai.createCompletion({
        model:"text-davinci-003",
        prompt:`${message}`,
        max_tokens:4000,
        temperature:.5,

    })
    res.json({message:response.data.choices[0].text})
} catch (error) {
    
}
})

