import React from 'react'

const Card = (props) => {
    // console.log(props);
  return (
    <div className={`p-10 m-2 text-center ${props.classname} shadow-xl rounded-[30px]`}>
      <img src={props.image} alt="" className='w-[200px]'/>

      {/* <div class="h-14 bg-gradient-to-r from-purple-500 to-pink-500">CARD</div> */}
        <h1 className='text-2xl'>{props.heading}</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum eveniet, nesciunt reprehenderit dignissimos architecto labore, suscipit vero voluptatibus, et consectetur eaque est! Deleniti aliquam sequi minima. Veritatis sunt saepe iusto.</p>
    </div>
  )
}

export default Card





// import React from 'react'
// import vector from "./assets/download5.jpeg";

// const Card = (props)  =>{
//     // console.log(props);
//   return (
//     <div className={p-10 m-2 text-center ${props.classname} shadow-xl rounded-[30px]}>
//       <img src={vector} alt="" className='w-[200px]' />
//         <h1 className='text-2xl text-center'>{props.heading}</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, autem quis magni molestiae pariatur ipsum sint. Obcaecati in alias, possimus vel maxime fuga, minima dolore suscipit cumque eum ratione itaque.</p>
//     </div>
//   )
// }

// export default Card