const { v4: { createEventStream } } = require('@1mill/cloudevents')

const lambda = createEventStream({ protocol: 'lambda' })
const perform = async () => {
	console.log('Hello world!')
}
exports.handler = lambda.handler(perform)

