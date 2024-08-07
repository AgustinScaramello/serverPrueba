const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
	sequelize.define(
		"User",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				unique: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			mail: {
				type: DataTypes.STRING,
				allowNull: false,
				isEmail: true,
			},
			username: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{ timestamps: false }
	)
}
