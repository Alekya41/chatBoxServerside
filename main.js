const ex =require('express');
const app= ex();
const port = 8081;
app.get('/',(req,res)=>
res.send("welcome to Chat System"));
app.listen(port,()=>console.log(`listening on port ${port}`))