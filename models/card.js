const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const cardSchema = new Schema(
	{
		attack: {
			type: Number
		},
		cardClass: {
			type: String
		},
		cost: {
			type: String
		},
		dbfId: {
			type: Number,
			required: true
		},
		faction: {
			type: String
		},
		health: {
			type: Number
		},
		name: {
			type: String,
			required: true
		},
		rarity: {
			type: String
		},
		set: {
			type: String,
			required: true
		},
		type: {
			type: String,
			required: true
		},
		artist: {
			type: String
		},
		collectible: {
			type: Boolean
		},
		flavor: {
			type: String
		},
		playRequirements: {
			type: String
		},
		text: {
			type: String
		},
		mechanics: {
			type: [String]
		},
		referencedTags: {
			type: [String]
		},
		race: {
			type: String
		},
		elite: {
			type: Boolean
		},
		targetingArrowText: {
			type: String
		},
		durability: {
			type: Number
		},
		overload: {
			type: Number
		},
		spellDamage: {
			type: Number
		},
		collectionText: {
			type: String
		},
		armor: {
			type: Number
		},
		entourage: {
			type: [String]
		},
		puzzleType: {
			type: Number
		},
		hideStats: {
			type: Boolean
		},
		howToEarn: {
			type: String
		},
		howToEarnGolden: {
			type: String
		},
		classes: {
			type: [String]
		},
		multiClassGroup: {
			type: String
		},
		questReward: {
			type: String
		}
	},
	{
		timestamps: true,
		toJSON: {
			virtuals: true,
			transform: (obj, ret) => {
				delete ret._id
			}
		}
	}
)

const model = mongoose.model('Card', cardSchema)
module.exports = model
