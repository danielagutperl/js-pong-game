import Board from './Board';
import { SVG_NS } from '../settings';


// import { settings } from "cluster";

export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;

    // Other code goes here...
    
    this.gameElement = document.getElementById(this.element);
    //create board and set width and height
    this.board = new Board(this.width, this.height);
  }



  render() {
    // More code goes here....

    //empty out before rendering
    this.gameElement.innerHTML = '';

    //Create svg element
    let svg = document.createElementNS(SVG_NS, 'svg');

    //set attributes and 
    svg.setAttributeNS(null, 'width', this.width);
    svg.setAttributeNS(null, 'height', this.height);
    svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
    
    // append svg to our gmae element (selected by id)
    this.gameElement.appendChild(svg);

    //render the game components inside the svg

    this.board.render(svg);
    //this render comes from this.bopard imported! the svg is created up there^^

    


  }}
