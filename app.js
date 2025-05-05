const express = require("express") // express reqire
const { Books } = require("./database/connection.js")
const app = express() // express lai trigger gareko

app.use(express.json)
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
app.get("/books", async function(req,res){
  // logic to fetch  bookd from database
    const datas=  await Books.findAll()  
    // select*frombooks; querry mah u garxam tara hami lai sequelize ley u method deko xa
              

  res.json({
    massage:"books fetched succesfully",
    //  hamii datas mah gayera yeuta datas vaney vado mah lagera save garya xumm ani jahiley pani key rah value name same xa vaney yeuta lekhdha hunxa
      datas

  })
})
app.post("/books", function(req,res){
  // LOGIC TO ADD BOOK 
res.json({
  massage:" books added sucessfully"
})

})
app.delete("/books/:id", function(req,res){
  //  LOGIC TO DELETE BOOK
res.json({
  massages:" book Deleted sucessfully"
})
})

app.patch("/books/:id", function(req,res){
  // LOGIC TO UPDATE BOOK 
  res.json({
    massages:" book updated succesfully"
  })
})
// postgresql://postgres.ydlidlickuhnqcadvniv:bibash77@G@aws-0-ap-south-1.pooler.
// supabase.com :6543/postgres

app.listen(4000 ,()=>{
    console.log( " projec/server/backned/has started at port 4000")

})

