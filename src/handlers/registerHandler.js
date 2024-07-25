const {
	createUser,
	findUserByMail,
	findUserByUsername,
} = require("../controllers/userController")

const postUser = async (req, res) => {
	const { name, mail, username, password } = req.body

	if (!name || !mail || !username || !password) {
		return res.status(400).json({ message: "Faltan datos" })
	}

	const userMail = await findUserByMail(mail)

	const userUsername = await findUserByUsername(username)

	try {
		if (userMail) {
			return res
				.status(400)
				.json({ message: "Ya existe un usuario con ese mail" })
		}

		if (userUsername) {
			return res
				.status(400)
				.json({ message: "Ya existe un usuario con ese nombre de usuario" })
		} else {
			await createUser(name, username, mail, password)
			return res
				.status(200)
				.json({ message: "El usuario fue creado con exito" })
		}
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

module.exports = postUser
