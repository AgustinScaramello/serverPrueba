const {
	createUser,
	findUserByMail,
	findUserByUsername,
} = require("../controllers/userController")

const postUser = async (req, res) => {
	const { name, mail, username, password } = req.body

	if (!name || !mail || !username || !password) {
		res.status(400).json({ message: "Faltan datos" })
	}

	const newUser = { name, mail, username, password }

	const userMail = await findUserByMail(mail)

	const userUsername = await findUserByUsername(username)

	try {
		if (userMail) {
			res.status(400).json({ message: "Ya existe un usuario con ese mail" })
		}

		if (userUsername) {
			res
				.status(400)
				.json({ message: "Ya existe un usuario con ese nombre de usuario" })
		} else {
			await createUser(newUser)
			res.status(200).json({ message: "El usuario fue creado con exito" })
		}
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

module.exports = postUser
