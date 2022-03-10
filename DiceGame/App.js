const dice = [1, 2, 3, 4, 5, 6]
const keys = document.querySelectorAll('.bottom span')
const result = document.querySelector('#res')
const images = [
	'dice-01.svg',
	'dice-02.svg',
	'dice-03.svg',
	'dice-04.svg',
	'dice-05.svg',
	'dice-06.svg',
]

let val = 0

let score = 0

let rollDice = 0

const getRandomNumber = () => Math.floor(Math.random() * 6)

const handleKeyPress = (e) => {
	const key = e.target.dataset.key
	document.querySelector('#sel').innerHTML = key
	val = parseInt(key)
	return val
}

const selectedVariable = () => {
	const randomNumber = getRandomNumber()
	document.querySelector('#die').setAttribute('src', images[randomNumber])
	
	if (val === dice[randomNumber]) {
		result.innerHTML = 'Your Guess was right!'
		score += 10
		document.querySelector('#sco').innerHTML = score
	} else {
		result.innerHTML = 'Your Guess was wrong!'
	}
}
keys.forEach((key) => {
	key.addEventListener('click', handleKeyPress)
})

const game = () => {
	rollDice += 1
	result.innerHTML = ''
	const load = document.querySelector('#load')
	load.innerHTML = 'Loading! game will start in a few second!'
	setTimeout(() => {
		selectedVariable()
	}, 6000)

	let a = 4
	setTimeout(() => {
		setInterval(() => {
			if (a === 0) {
				clearInterval()
			} else {
				a -= 1
				load.innerHTML = `The dice will change in   ${a}  seconds.`
			}
		}, 1000)
	}, 2000)
}

game()

setInterval(() => {
	if (rollDice !== 10) game()
	else clearInterval()
}, 7000)
