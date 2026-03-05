const express=require("express")
const fs=require("fs")

const app=express()

app.use(express.json())
app.use(express.static("public"))

app.post("/submit",(req,res)=>{

const newMessage=req.body

let messages=[]

if(fs.existsSync("messages.json")){
messages=JSON.parse(fs.readFileSync("messages.json"))
}

messages.push(newMessage)

fs.writeFileSync("messages.json",JSON.stringify(messages,null,2))

res.json({message:"Message sent successfully!"})

})

app.listen(3000,()=>{
console.log("Server running on http://localhost:3000")
})