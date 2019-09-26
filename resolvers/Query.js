const Card = require('../models/card')

async function cards(parent, args, context) {
	const { limit = 20, skip = 0, filter = {} } = args
	console.log('Filter', filter)
	return Card.find(filter, null, { skip, limit }).sort('field name')
}

async function card(parent, args, context) {
	return Card.where({ dbfId: args.id }).findOne()
}

module.exports = {
	cards,
	card
}
