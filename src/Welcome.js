// 1.named import/exports - preferred - add multiple
// 2.default import/exports - only one

//named import
function Welcome(props){
    return(
      <div>
        <h1>Hello {props.name} ⭐👍</h1>
      </div>
    )
    
  }

const double = (n)=>n*2;

// export default Welcome;   // default export



export {Welcome, double};  // named export


