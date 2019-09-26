const { GraphQLServer } = require('graphql-yoga')

const mongoose = require('mongoose')
const db = mongoose.connect(
	'mongodb://localhost/hearthstone-deck-builder-dev',
	{ useNewUrlParser: true }
)
const Query = require('./resolvers/Query')

const resolvers = {
	Query
}

const server = new GraphQLServer({
	typeDefs: './schema.graphql',
	resolvers
})

server.start({ port: 7777 }, () =>
	console.log(`The server is running at: http://localhost:7777`)
)
