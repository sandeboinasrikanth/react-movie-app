import { Counter } from './Counter';

//Object Destructuring
export function Message({ pic, name }) {
  return (
    <div>
      <img className='profile-pic' src={pic} alt={name} />
      <h1>Hello {name} ⭐👍</h1>
      <Counter />
    </div>
  );

}

// console.log(double(20))
//Logic + View =>(React Component- App)
// Defining a Component
//props - properties - pass arguments to components
