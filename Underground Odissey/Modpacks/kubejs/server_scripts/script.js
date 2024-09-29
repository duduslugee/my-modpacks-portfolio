ServerEvents.recipes(event => {
	event.remove({ input: '#alltheores:ore_hammers' })
	event.remove({ input: 'ad_astra:hammer' })
	event.remove({ input: 'botania:orechid' })
	event.remove({ input: 'botania:orechid_ignem' })
	event.remove({ output: 'botania:orechid' })
	event.remove({ output: 'botania:orechid_ignem' })
})