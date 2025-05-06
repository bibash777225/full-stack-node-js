//  books,   bookname , book price ,book auther,bookgenre
// function bookmodel( ){


// }regularfunction
const bookModel= (sequelize,DataTypes)=>{
    //  database mah kei kura singular amh lekhya xa vaney teslai pular jastai book ko books
     const Book =sequelize.define("book", {
        bookName:{
            type:DataTypes.STRING,
            allowNull :false
        },
        
        bookPrice:{
            type:DataTypes.INTEGER,
            allowNull :false
        },

        bookAuthor:{
            type:DataTypes.STRING
        },

        bookGenre:{
            type:DataTypes.STRING,
        },
        
    }) 
    
return Book;
}
module.exports=bookModel;


