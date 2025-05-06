exports.fetchBook=async function(req,res){
  // logic to fetch  bookd from database
    const datas=  await Books.findAll()  
    // select*frombooks; querry mah u garxam tara hami lai sequelize ley u method deko xa
              

  res.json({
    massage:"books fetched succesfully",
    //  hamii datas mah gayera yeuta datas vaney vado mah lagera save garya xumm ani jahiley pani key rah value name same xa vaney yeuta lekhdha hunxa
      datas : datas

  })
}
exports.addBook= async function(req,res){
  // LOGIC TO ADD BOOK goes hear
  // console.log (req.body)
  // const bookName = req.body.bookName
  // const bookPrice =req.body.bookPrice

  const {bookName, bookPrice,bookAuthor,bookGenre } = req.body;
 await Books.create({
    bookName,   
    // colume:value
    bookPrice,
    bookAuthor,
    bookGenre
    //  databasae querry gardha sadhai ekxin time lagxa so await and async halnu 
    // paryou  Book.db  ko Books lai pakadera teslai nai garxam
    
  })

res.json({
  massage:" books added sucessfully"
})

}





exports.deleteBOOK =function(req,res){
    //  LOGIC TO DELETE BOOK
  res.json({
    massages:" book Deleted sucessfully"
  })
  }




exports.editBook=function(req,res){
    // LOGIC TO UPDATE BOOK 
    res.json({
      massages:" book updated succesfully"
    })
  }