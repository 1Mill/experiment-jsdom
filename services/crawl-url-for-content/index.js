const { JSDOM } = require('jsdom')
const { v4: { createEventStream } } = require('@1mill/cloudevents')

const lambda = createEventStream({ protocol: 'lambda' })
const perform = async () => {
	const dom = new JSDOM(`<!DOCTYPE html><p>This is the content of the page!</p>`)
	const test = dom.window.document.querySelector('p').textContent
	console.log(test)
}
exports.handler = lambda.handler(perform)
