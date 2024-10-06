// 1 vanilla Function
var property = new Factory (name, price, space, transfer, pages);
function Factory(name, price, space, transfer, pages)
 {
    this.name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
}
console.log(property);

//  2 vanilla Function
var Shop = new Shoes("red", 2000, 2);
function Shoes(color, price, pieces) 
{
    this.color = "red";
    this.price = 2000;
    this.pieces = 2;
}
console.log(Shop);

// 3 vanilla Function
var fruit = new mango("yellow", 500, "sweet", "onekg");
function mango(color, price, taste, quantity)
{
    this.color = "yellow";
    this.price = 500;
    this.taste = "sweet";
    this.quantity = "one kg"
}
console.log(fruit);

// 4 vanilla Function
var stationary = new Pencil("pencil", 500, 5);
function Pencil(name, price, quantity)
{
    this.name = "pencil";
    this.price = 500;
    this.quantity = 5;
}
console.log(Pencil);

// 5 vanilla Function
var mall = new Clothes("J.", 3000, "Yellow", 2);
function Clothes(Brand, price, color, quantity)
{
    this.Brand = "J.";
    this.price = 3000;
    this.color = "Yellow";
    this,quantity = 1;
}
console.log(mall);

nimra shoaib