import React from 'react'
import { Fragment } from 'react'
import Menu from "./components/Menu"
import "./App.css"
import sandwichimg from "./assets/sandwich.jpg"
import tacosimg from "./assets/tacos.jpg"
import drinkimg from "./assets/drinks.jpg"
import burgerimg from "./assets/burger.jpg"
import hotdogimg from "./assets/hotdog.jpg"
import pizzaimg from "./assets/pizza.jpg"
import nuggetimg from "./assets/nuggets.jpg"
import friesimg from "./assets/fries.jpg"
import coffeeimg from "./assets/coffee.jpg"
import donutimg from "./assets/donuts.jpg"

const menular1 = [
{name: "sandwich", price: 2.50, img: sandwichimg},
{name: "mexican tacos", price: 1.50, img:tacosimg},
{name: "drinks", price: 1.50, img:drinkimg},
{name: "burger", price: 2.50, img:burgerimg},
{name: "hotdog", price: 2.50, img:hotdogimg},
];

const menular2 =[
{name: "pizza", price: 3.50, img:pizzaimg},
{name: "chicken nuggets", price: 3.00, img:nuggetimg},
{name: "french fries", price: 2.00, img:friesimg},
{name: "coffee", price: 1.50, img:coffeeimg},
{name: "donuts", price: 1.50, img:donutimg}
]
const App = () => {
  
  return (
   <Fragment>
      <Menu menular1={menular1} menular2={menular2} />
   </Fragment>
  )
}

export default App