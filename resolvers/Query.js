const Card = require('../models/card')

async function cards(parent, args, context) {
	const { limit = 20, skip = 0, filter = {} } = args

	let constructedFilter = {}
	if (filter.cost) {
		console.log('Cost: ', filter.cost)
		constructedFilter.cost = {}
		constructedFilter.cost[filter.cost.operation] = filter.cost.value
	}

	console.log('Constructed Query: ', constructedFilter)

	const query = Card.find(constructedFilter, null, { skip, limit }).sort(
		'field name'
	)
	console.log('Query: ', query)
	console.log('Args: ', args)
}

async function card(parent, args, context) {
	return await Card.where({ dbfId: args.id }).findOne()
}

module.exports = {
	cards,
	card
}
