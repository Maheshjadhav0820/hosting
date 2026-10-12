const {
    readBlog,
    createBlog,
    updateBlog,
    deleteBlog
} = require("../controllers/blog.controller")

const router = require("express").Router()

router.get("/", readBlog)

router.post("/create", createBlog)

router.put("/modify/:id", updateBlog)

router.delete("/remove/:id", deleteBlog)

module.exports = router
