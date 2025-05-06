// hami yeha chai database connection ko code or logic lekhxam 
 const{ Sequelize, DataTypes} =require("sequelize")
 
// const bookModel=require("./models/book.model.js")(sequelize,DataTypes)     you gardha pani avyou

//  const require=  require('sequelize')
//  const Seqelize= require.Sequelize
//  const DataTypes= require.DataTypes
 const sequelize = new Sequelize ("postgresql://postgres.abmovpivpcmtefvsxdus:bibash9848766004@aws-0-ap-south-1.pooler.supabase.com:6543/postgres")
//   Capital S vako class hoo ani arko object create garya ho instance of classs

sequelize.authenticate()
.then(()=>{
    console.log(" authetication connectes success")

})
.catch((err)=>{
    console.log(" error ayou" + err)

})  
const db ={}
    db.Sequelize = Sequelize
    db.sequelize = sequelize  

    db.Books= require("../models/book.model.js")(sequelize,DataTypes)
   
//    migrate ko code ho u chai
   sequelize.sync({ alter:true})
   .then(()=>{
    console.log("migrate vayou hai taw")
   }).catch((error)=>{
    console.log("Error : "+error);
    
   })
 // class mahh j xa tei same ,same halney  obj mah j xa tei name hald name convention hunxa vaney kura

     module.exports= db
