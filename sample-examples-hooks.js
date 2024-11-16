import {useRef,useState,useEffect } from 'react';

 function App(){
  
   const[inputValue,setInputValue] = useState("");
  const [dummyData,setDummyData] = useState(0);
  const inputValue = useRef("")
const count = useRef(0);

useEffect(()=>{
  const checkCountValueHandler = ()=>{
    console.log(count.current)
    console.log(inputValue.current)
    console.log("we are trying to fetch data when our site loads for first time")
  }
  
  checkCountValueHandler();
},[inputValue,dummyData]);
const checkCountValueHandler = ()=>{
  console.log(count.current)
  console.log(inputValue.current)
  console.log("we are trying to fetch data when our site loads for first time")
}

checkCountValueHandler();
  return(
    <>
     <input type = "text" 
           value = {inputValue.current}
           onChange = {(e)=> {
            setInputValue(e.target.value)
            setDummyData(e.target.value)
          }}
    />
    <h1> Rendered Value: {dummyData}</h1> 
     <button type = "button" onClick = {()=>setDummyData(dummyData+1)}> Check count value </button>
     {inputValue.current&&<h1>I am visible</h1>}

    </>
  )
}
// export default App;

// function App(){

//   const [inputElement] = useRef

//   const focusInput = ()=>{
//     inputElement.current.focus();
//   };

  
//   return(
//     <>
//     <input type = "text" ref = {inputElement} />
//     <button type = "button" onClick = {focusInput}>Focus Input</button>
//     </>
//   )
// }
