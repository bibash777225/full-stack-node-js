const { fetchBook, addBook, deleteBOOK, editBook } = require("../controller/book.Controller")

const router=require("express").Router

router.route("/books").get(fetchBook).post(addBook)
router.routr("/book/:id").delete(deleteBOOK).patch(editBook)


module.exports=route