import './App.css';

//Logic + View =>(React Component- App)
// Defining a Component
function App() {
  //js starts
  // const time = 30;
  //js ends

  //JSX starts
  //Dry - Don't repeat yourself
  const names =["mayuri","Abhay","Netravathi"];

  const students =[
    {
      name:"Mayuri",
      pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1yAMzre22bdnxMWjhnSOqKwxMG0FfGmTNBw&usqp=CAU"
    } ,
    {
      name:"Abhay", 
      pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRlLkxwOUxTbVCtTkfoKDhTEiMpQ_J46y4Iw&usqp=CAU"
    } ,
    {
      name:"Netravathi", 
      pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjuL_ac_4cZGKHuKZixoHYll6BslFOkYVEVQ&usqp=CAU"
    }
  ]
      

  return (
    <div className="App">
      {/* components + Loop */}
      {students.map((student)=>(
        <Message name={student.name} pic={student.pic} />
      ))}

      {names.map((nm)=>(
        <Welcome name={nm}  />
      ))}
      {/* <Welcome name="srikanth" /> */}

    </div>
  );
  //JSX ends
}

//props - properties - pass arguments to components
export default App;

function Welcome(props){
  return(
    <div>
      <h1>Hello {props.name} ⭐👍</h1>
    </div>
  )

}

//Object Destructuring
function Message({pic,name}){
  return(
    <div>
      <img className='profile-pic' src={pic} alt={name} />
      <h1>Hello {name} ⭐👍</h1>
    </div>
  )

}

// create Component
// function -> Component
// 1. First Letter should be Capital
// 2. It should have One JSX Element

//Define the Component - Logic + view
// function Message(props){
//   // console.log(props)
//   // const name = "Divyashree";
//   return(
//     <div>
//       <img className='profile-pic' src={props.pic} alt={props.name} />
//       <h1>Hello {props.name} ⭐👍</h1>
//     </div>
//   )

// }

// <></> => React Fragment - Helps in styling & removing element(performance)

//{} - template syntax

//JSX - javascript XML
// className

//webpack + babel
//JSX - JS
//why we are using className

