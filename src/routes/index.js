const { Router } = require("express")
const getUser = require("../handlers/loginHandler")
const postUser = require("../handlers/registerHandler")

const router = Router()

router.get("/user", getUser)
router.post("/user", postUser)

module.exports = router
