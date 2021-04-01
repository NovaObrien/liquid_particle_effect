const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let particlesArrary = []
const numberOfParticles = 100

//measure title element
let titleElement = document.getElementById('title1')
let titleMeasurements = titleElement.getBoundingClientRect()
let title = {
  x: titleMeasurements.left,
  y: titleMeasurements.top,
  width: titleMeasurements.width,
  height: titleMeasurements.height
}
class Particle {
  constructor(x, y){
    this.x = x
    this.y = y
    this.size = Math.random() * 15 + 1
    this.weight = Math.random() * 1 + 1
    this.directionX = -1
  }
  update(){
    if(this.y > canvas.height){
      this.y = 0 - this.size
      this.weight = Math.random() * 1 + 1
      this.x = Math.random() * canvas.width * 1.3
    } 
    this.weight += 0.05
    this.y += this.weight
    this.x += this.directionX
  }
  draw(){
    ctx.fillStyle = 'purple'
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
  }
}
function init(){
  for(let i = 0; i < numberOfParticles; i++){
    const x = Math.random() * canvas.width
    const y = Math.random() * canvas.height
    particlesArrary.push(new Particle(x, y))
  }
}
init()
// const particle1 = new Particle(400, 10)
// const particle2 = new Particle(100, 10)

function animate(){
  ctx.fillStyle = 'rgba(255, 255, 255, 0.01)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  for ( let i = 0; i < particlesArrary.length; i++){
    particlesArrary[i].update()
    particlesArrary[i].draw()
  }
  ctx.fillRext(title.x, title.y, title.width, title.height)
  requestAnimationFrame(animate)
}
animate()