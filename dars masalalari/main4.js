function Circle(radius){
    this.perimetr = 2 * Math.PI *radius;
    this.yuza = Math.PI*radius;
}
let circle = new Circle(4);
console.log(circle);