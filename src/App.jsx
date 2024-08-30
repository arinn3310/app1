import { useState } from "react";
import Card from "./Card";
import ProductImage1 from "./assets/1.jpeg"
import ProductImage2 from "./assets/2.jpeg"
import ProductImage3 from "./assets/3.jpeg"
import ProductImage4 from "./assets/4.jpeg"
import Child from "./Child";

// const data = [
//   {
//     heading : "Card",
//     description : "Card 1 Description",
//     classname : "bg-slate-300",
//     image : ProductImage1
//   },
//   {
//     heading : "Card 2",
//     description : "Card 2 Description",
//     classname : "bg-green-300",
//     image : ProductImage2
//   },
//   {
//     heading : "Card 3",
//     description : "Card 3 Description",
//     classname : "bg-red-300",
//     image : ProductImage3
//   },
//   {
//     heading : "Card 4",
//     description : "Card 4 Description",
//     classname : "bg-blue-300",
//     image : ProductImage4
//   },
//   {
//     heading : "Card 5",
//     description : "Card 5 Description",
//     classname : "bg-cyan-300",
//     image : ProductImage2
//   },
//   {
//     heading : "Card 6",
//     description : "Card 6 Description",
//     classname : "bg-purple-300",
//     image : ProductImage3
//   },
//   {
//     heading : "Card 7",
//     description : "Card 7 Description",
//     classname : "bg-orange-300",
//     image : ProductImage4
//   },
//   {
//     heading : "Card 8",
//     description : "Card 8 Description",
//     classname : "bg-sky-300",
//     image : ProductImage1
//   },
// ]



function App(){

  // usestate
  const [count , setCount] = useState(0);

  // let count = 0;
  // console.log(count)

  return(
    <div className="text-center "> 

  <p className="text-4xl font-medium text-white">the value of count is: {count}</p>
  <Child count={count} setCount={setCount} />

  {/* 
  
     {/* <div className="flex gap-4"></div>

    <Card heading="card1 heading" description="this is card 1 desc" classname = "bg-red-600 " />
     
      <Card heading="card2 heading" description="this is card 1 desc" classname = "bg-sky-400" />
     
      <Card heading="card3 heading" description="this is card 1 desc" classname = "bg-amber-500" />
     
      <Card heading="card4 heading" description="this is card 1 desc" classname = "bg-green-500" />
     
      <Card heading="card5 heading" description="this is card 1 desc" classname = "bg-green-500" />

      <p className="text-4xl font-medium text-white">the value of count is: {count}</p>
     */}
<p className="text-4xl font-medium text-white">the value of count is: {count}</p>
    </div>
    
  ) 
}
export default App;


