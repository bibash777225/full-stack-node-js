
const { where } = require("sequelize");
const {Books} = require("../database/connection");

exports.fetchBooks=async function(req,res){
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





exports.deleteBook =async function(req,res){
  
    //  LOGIC TO DELETE BOOK
    const id= req.params.id
    
    const datas= { bookName,bookAuthor,bookPrice,bookGenre} =req.body
   
    await Books.destroy({})// k k update garney first argument dinu paryou next argument kasko update garney vamey kura hoo  key:value same xa vamey yeuta lekdha vo
  res.json({
    massages:" book Deleted sucessfully"
  })
  }




exports.editBook= async function(req,res){
  try{
    // LOGIC TO UPDATE BOOK 
    // kun part specific edit garney  thyou id linu paryou

    const id =req.params.id
    const{ bookName,bookAuthor,bookPrice,bookGenre}=req.body

    await Books.update({ bookAuthor,bookName,bookPrice,bookGenre},{
      where:
      {
        id:id
      }
  
    })
//mongo mah   Books.findByIdUpdate(id,[yeha bitra k update garney hunxa]) tara yesma phila  k update garney ani id hunxa

    
    res.json({
      massages:" book updated succesfully"
    })
  }
   catch (error) 
   {
    res.json({
      massage:" something went wrong"
    })
  } 
}

  exports.singleFetchBook= async function(req,res){
    const id=req.params.id //2

    const datas= await Books.findByPk(id)//always return objects

res.json({
    massege: "single book fetched sucessfully",
    datas,
})
    // first capture what id is he/she 
}