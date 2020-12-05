const { JSDOM } = require('jsdom')
const { v4: { createEventStream } } = require('@1mill/cloudevents')

const lambda = createEventStream({ protocol: 'lambda' })
const perform = async () => {
	const dom = await JSDOM.fromURL('https://example.com', {
		resources: 'usable',
		runScripts: 'dangerously',
	})

	const test = dom.window.document.querySelector('h1').textContent
	console.log(test)

	const paragraphs = Array.from(dom.window.document.querySelectorAll('p')).map(htmlNode => htmlNode.textContent)
	console.log(paragraphs)
	console.log(paragraphs.length)
}
exports.handler = lambda.handler(perform)
