const { Router } = require("express")
const getUser = require("../handlers/loginHandler")
const postUser = require("../handlers/registerHandler")
const getUsers = require("../handlers/getUsersHandler")

const router = Router()

router.get("/user", getUser)
router.get("/users", getUsers)
router.post("/user", postUser)

module.exports = router
