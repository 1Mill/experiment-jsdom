const fetch = require('node-fetch')
const { JSDOM } = require('jsdom')
const { v4: { createEventStream } } = require('@1mill/cloudevents')

const HTML_TAGS = [
	'h1',
	'h2',
	'h3',
	'h4',
	'h5',
	'h6',
	'p',
]
const URL = 'https://www.pray.com/series/james-earl-jones-reads-the-bible/'

const loadDOMScripts = () => {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, 2000)
	}
)}
const perform = async () => {
	const response = await fetch(URL)
	const body = await response.text()

	const dom = new JSDOM(body, {
		resources: 'usable',
		runScripts: 'dangerously',
		url: URL,
	})
	await loadDOMScripts()

	const tags = HTML_TAGS.join(', ')
	const nodes = dom.window.document.querySelectorAll(tags)
	const elements = Array.from(nodes).map(node => ({
		content: node.innerHTML,
		tag: node.tagName.toLowerCase(),
	}))
	console.log(elements)
}

const lambda = createEventStream({ protocol: 'lambda' })
exports.handler = lambda.handler(perform)
