const express = require("express") // express reqire
 const bookRoute= require("./routes/bookRoute.js")
  const cors= require("cors")
const app = express() // express lai trigger gareko
require("./database/connection.js")

app.use(express.json())

  app.use(cors({
    origin:"*"    // josley oani chlauna paiypu josley hit handa panii hunxa origin:"*"
  }))
app.use("/api/Books",bookRoute)  // localhost:4000/api +/books=localhost:4000/api/books
                       // localhost:4000/api +/books/:id=localhost:4000/api/books/:id



// let app=require("express")()
 


// app.get("/",(req,res)=>{
//   res.json({
//     name:" charlii",
//     address:" bhaktapurnepal",

//   })
// });


// app.get("/about",( req,res)=>{ // request response
//     res.json({
//       name:" bibash",
//       address:" bhaktapurrr",
//       country:"nepal"
//     })

// });
// app.post( "/register", (req,res) =>{
//  res.json({
//   name:" rich dad",
//   address:" willam"
//  })


// });
app.listen(4000 ,()=>{
    console.log( " project/server/backned/has started at port 4000")

})

