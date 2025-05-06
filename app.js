const express = require("express") // express reqire
 const bookRoute= require("./routes/book.Route.js")

const app = express() // express lai trigger gareko

app.use(express.json())
app.use("",bookRoute)
// let app=require("express")()
 require("./database/connection.js")


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

