const { findUserByUsername } = require("../controllers/userController")

const getUser = async (req, res) => {
	const { username, password } = req.body

	if (!username || !password) {
		return res.status(400).json({ message: "Faltan datos" })
	}

	try {
		const findUser = await findUserByUsername(username)

		if (!findUser) {
			return res.status(404).json({ message: "El usuario no existe" })
		}

		if (findUser && findUser.password === password) {
			return res.status(200).json(findUser)
		} else {
			return res.status(404).json({ message: "Contraseña Incorrecta" })
		}
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

module.exports = getUser
