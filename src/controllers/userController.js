const { User } = require("../db")

const createUser = async (name, username, mail, password) => {
	const newUser = await User.create({ name, username, mail, password })

	return newUser
}

const findUserByMail = async (mail) => {
	const user = User.findOne({ where: { mail: mail } })

	return user
}

const findUserByUsername = async (username) => {
	const user = User.findOne({ where: { username: username } })

	return user
}

module.exports = { createUser, findUserByMail, findUserByUsername }
