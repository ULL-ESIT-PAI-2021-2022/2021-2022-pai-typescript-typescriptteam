/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @author Jorge Quintana García
 * @since 20.feb.2020, 26.02.2021, 24.04.2022
 * @version 3
 * @desc ES6 Object Oriented Analog Canvas based Clock
 * @tutorial Adapted from {@link https://www.w3schools.com/graphics/canvas_clock.asp}
 * Also, check out {@link https://gist.github.com/fixiecoder/a6146501aaa8ad3bf885fa30a66ba079}
 * 
 * Sande is the original programmer of the JS code this is based of.
 * We adapted it to TypeScript so it works.
 */

interface Hand {
  length: number;
  color: string;
  width: number;
}
  
interface Hands {
  second: Hand;
  minute: Hand;
  hour: Hand;
}
  
/**
 * An ES6 class representing an analog clock that is drawn on a page using HTML Canvas
 * @class
 */
class Clock {
/** @private */
/** All properties are private */
/** All the properties will be defined in the constructor */
  private centerX: number = undefined;
  private centerY: number = undefined;
  private radius: number = undefined;
  private hands: Hands = undefined;
  private canvas: HTMLCanvasElement = document.createElement("CANVAS") as HTMLCanvasElement;  // Creates A new HTML element: a canvas
  private ctx: CanvasRenderingContext2D = this.canvas.getContext('2d');

  /**
   * Create a clock
   * @constructor
   * @public
   * @param {HTMLElement} containerElement - The HTML element that contains the clock
   * @param {number} size - Size in pixels of the square in which the clock is inscribed
   */
  constructor(containerElement: HTMLElement, size: number) {
    this.radius = 0.95 * (size / 2);
    this.hands = {
      second: {
        length: this.radius * 0.90,
        color: 'lightgrey',
        width: this.radius * 0.01
      },
      minute: {
        length: this.radius * 0.90,
        color: 'darkgrey',
        width: this.radius * 0.03
      },
      hour: {
        length: this.radius * 0.7,
        color: 'black',
        width: this.radius * 0.05
      }
    };
    // debugger;
    this.canvas.width = size;
    this.canvas.height = size;
    containerElement.appendChild(this.canvas);  // Adds the canvas HTML element as a 'child' of the containerElement (body)
    this.centerX = this.canvas.width / 2;
    this.centerY = this.canvas.height / 2;
    this.ctx.translate(this.centerX, this.centerY);
    // this.render = this.render.bind(this);
    // this.render();
    // setInterval(this.render, 1000);  // An alternative for animation
    this.renderArrow();
  }
  
  /**
   * Draws the clock face
   * @param {CanvasRenderingContext2D} ctx - Canvas Drawing Context
   */
  private drawClockFace(ctx: CanvasRenderingContext2D): void {
    const FILL_STYLE: string = '#333';  // For gradient (external ring)
    // Draw the white clock Face
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
  
    // Create a radial gradient (95% and 105% of radius):
    //                 createRadialGradient(x0, y0, r0,                 x1, y1, r1);
    let gradient: CanvasGradient = ctx.createRadialGradient(0,   0, this.radius * 0.95, 0,  0, this.radius * 1.05);
    // Create 3 color stops, corresponding with the inner, middle, and outer edge of the arc:
    gradient.addColorStop(0, FILL_STYLE);
    gradient.addColorStop(0.5, 'white');
    gradient.addColorStop(1, FILL_STYLE);
    // Define the gradient as the stroke style of the drawing object:
    ctx.strokeStyle = gradient;
    ctx.lineWidth = this.radius * 0.1;
    ctx.stroke();
    // Draw the cental black button
    ctx.beginPath();
    ctx.arc(0, 0, this.radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = FILL_STYLE;
    ctx.fill();
  }
  
  /**
   * Draws the clock numbers
   * @param {CanvasRenderingContext2D} ctx - Canvas Drawing Context
   */
  private drawNumbers(ctx: CanvasRenderingContext2D): void {
    ctx.font = this.radius * 0.15 + 'px arial';
    ctx.fillStyle = 'black';  // Numbers color
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    for(let hour: number = 1; hour <= 12; hour++){
      const RATIO: number = 0.85;         // 85%
      const ANGLE: number = hour * Math.PI / 6;  // Pi/6 = 2*Pi/12
      ctx.rotate(ANGLE);
      ctx.translate(0, -this.radius * RATIO);
      ctx.rotate(-ANGLE);
      ctx.fillText(hour.toString(), 0, 0);
      ctx.rotate(ANGLE);
      ctx.translate(0, this.radius * RATIO);
      ctx.rotate(-ANGLE);
    }
  }
  
  /**
   * Draws each of the clock hands
   * @param {('second' | 'minute' | 'hour')} handType - Hand type ('second' | 'minute' | 'hour')
   * @param {CanvasRenderingContext2D} ctx - Canvas Drawing Context
   */
  private drawHand(handType: ('second' | 'minute' | 'hour'), ctx: CanvasRenderingContext2D): void {
    const NOW: Date = new Date();
    const SECONDS: number = NOW.getSeconds();
    const MINUTES: number = NOW.getMinutes();
    const HOURS: number = NOW.getHours() % 12;
    const HAND: Hand = this.hands[handType];
    let angle: number = 0;
  
    switch(handType) {
      case 'second':
        angle = (SECONDS * Math.PI / 30);
        break;
      case 'minute':
        angle = (MINUTES * Math.PI / 30) + (SECONDS * Math.PI / (30 * 60));
        break;
      case 'hour':
        angle =  (HOURS * Math.PI / 6) + (MINUTES * Math.PI / (6 * 60)) + (SECONDS * Math.PI / (360 * 60));
        break;
      default: 
        throw new Error('Error in handType');
    }
    ctx.beginPath();
    ctx.lineWidth = HAND.width;
    ctx.lineCap = 'round';
    ctx.strokeStyle = HAND.color;
    ctx.moveTo(0, 0);
    ctx.rotate(angle);
    ctx.lineTo(0, -HAND.length);
    ctx.stroke();
    ctx.rotate(-angle);
  }
  
  /** Draws the clock hands */
  private drawTime(): void {
    this.drawHand('second', this.ctx);
    this.drawHand('minute', this.ctx);
    this.drawHand('hour', this.ctx);
  }
  
  /**
   * Draws the central golden circle over the hands
   * @param {CanvasRenderingContext2D} ctx - Canvas Drawing Context
   */
  private drawCentralCircle(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(0, 0, this.radius * 0.04, 0, 2 * Math.PI);
    ctx.fillStyle = 'goldenrod';
    ctx.fill();
  }
  
  /** Draws the clock and performs it's animation */
  render() {
    this.drawClockFace(this.ctx);
    this.drawNumbers(this.ctx);
    this.drawTime();
    this.drawCentralCircle(this.ctx);
    requestAnimationFrame(this.render);  // Animate the clock
  }
  
  /** 
    * Draws the clock and performs it's animation 
    * 
    * Alternatively, the render method can be written as an arrow function (renderArrow)
    * In this case the binding done in the constructor can be avoided:
    *    this.render = this.render.bind(this);
    */
  renderArrow = () => {
    this.drawClockFace(this.ctx);
    this.drawNumbers(this.ctx);
    this.drawTime();
    this.drawCentralCircle(this.ctx);
    requestAnimationFrame(this.renderArrow);  // Animate the clock
  }
}
  
// https://www.w3schools.com/jsref/prop_doc_body.asp
// constructor(containerElement, size)
// Notice: the HTML code for the clock does not contain a canvas tag:
//         the canvas is created in the JS code (in the class constructor)
let clock: Clock = new Clock(document.body, 800);
console.log(clock);