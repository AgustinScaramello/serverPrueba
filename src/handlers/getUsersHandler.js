const { allUsers } = require("../controllers/userController")

const getUsers = async (req, res) => {
	const users = await allUsers()
	try {
		return res.status(200).json(users)
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

module.exports = getUsers
