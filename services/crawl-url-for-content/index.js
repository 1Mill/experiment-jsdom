const fetch = require('node-fetch')
const { JSDOM } = require('jsdom')
const { v4: { createEventStream } } = require('@1mill/cloudevents')

const URL = 'https://www.pray.com/series/james-earl-jones-reads-the-bible/'

const loadDOMScripts = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => { resolve() }, 2000)
	}
)}
const perform = async () => {
	const res = await fetch(URL)
	const body = await res.text()

	const dom = new JSDOM(body, {
		resources: 'usable',
		runScripts: 'dangerously',
		url: URL,
	})

	await loadDOMScripts()
	const temp = Array.from(dom.window.document.querySelectorAll('p')).map(htmlNode => htmlNode.textContent)
	console.log(temp.length)
	return temp.length
}

const lambda = createEventStream({ protocol: 'lambda' })
exports.handler = lambda.handler(perform)
