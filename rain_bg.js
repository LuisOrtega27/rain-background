'use strict'

const rainBg = document.querySelector('#rain-bg')


const randomizeFallPoint = (item)=>{
	let randomLeft = Math.random() * rainBg.clientWidth
	item.style.left = `${randomLeft}px`
}

const randomize = (item)=>{

	let randomDistance = Math.floor( (Math.random() * 10) + 1 )
	let randomDelay = (Math.random() * 15)

	randomizeFallPoint(item)

	item.style.animationDelay = `${randomDelay}s`

	item.style.animationDuration = `${randomDistance}s`
	item.children[0].className = randomDistance>5? 'far' : 'close'
	
	console.log(item)

	item.addEventListener('animationstart', ()=>{
		setInterval( ()=> randomizeFallPoint(item), `${randomDistance}000`)
	})
}



const makeDrops = (quantity)=>{
	
	const frag = document.createDocumentFragment()
	
	for (let i = 0; i < quantity; i++) {
		
		const dropBox = document.createElement('DIV')
		const drop = document.createElement('DIV')
		const dropForm = document.createElement('DIV')
		
		dropBox.className = 'dropBox'

		drop.appendChild(dropForm)
		dropBox.appendChild(drop)

		randomize(dropBox)

		frag.appendChild(dropBox)
	}

	rainBg.appendChild(frag)
}

makeDrops(300)