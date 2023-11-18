import {useRef, useState,useEffect} from 'react';
import logo from './logo.svg';
import language from './language';
import ganeshaImg from './assets/ganesha1.png';
import omImg from './assets/om.png'
import './App.css';


function App() {
 
  const [sellingValue , setsellingValue] =useState('');
  const [originalValue , setOriginalValue] =useState('');
  const [finalValue , setFinalValue] = useState('');
  const[lan,setLang] = useState("Hindi")

  useEffect(()=>{
    let totalValue = (sellingValue)*(originalValue)/1000 
     setFinalValue(totalValue.toFixed(2))
  },[sellingValue,originalValue])

const {shopName,title,Rs,totalGram,perKgGram,clear} = language[lan];

  const clearAll = () =>{
    setsellingValue('');
    setOriginalValue('');
    setFinalValue('0.00')
  }

  return (
    <div className="app">
      <div className='image'> 
      <img src ={ganeshaImg} alt ="alt" />
      </div>
     <div className='shopWrapper'>
     <img src ={omImg} alt ="alt" />
     <h1 className='shopName'>{shopName}</h1>

      </div> 
      <div className='languageWrapper'>
       <button className ={lan == "Hindi" ? "active": "inactive"} onClick = {()=>setLang("Hindi")}>Hindi</button>
       <button className ={lan == "English" ? "active": "inactive"} onClick= {()=>setLang("English")}>English</button>
      </div>
   
       <h3 >{title}</h3>
       {<h1>{finalValue} {Rs}.</h1>}
       <div className='inputContainer'>
        <div>
       <label for="price">{totalGram}:</label><br/>
       <input type="text" value = {sellingValue}  id="price" name="price" onChange ={(e)=>setsellingValue((e.target.value))}/><br/>

       </div>
       <label for="price">{perKgGram}</label><br/>
          <input type="text" id="sprice"  value = {originalValue}  name="sprice" onChange ={(e)=>setOriginalValue((e.target.value))}/><br/>
       </div>
       <button type="submit" onClick ={clearAll} >{clear}</button>
    </div>
  );
}

export default App;



