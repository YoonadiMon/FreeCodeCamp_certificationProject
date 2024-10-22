import Card from './components/Card'
import { useEffect, useState } from 'react'
import quotesArr from './../quotes.json'

function App() {
  const [num, setNum] = useState(0);
  const [rgb, setRgb] = useState([0,1,2]);
  const [color, setColor] = useState();
  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random()
        * (max - min + 1)) + min;
  };
  const randomColor = () => {
    return [Math.floor(Math.random()
        * (255 - 0 + 1)) + 0,Math.floor(Math.random()
      * (255 - 0 + 1)) + 0,Math.floor(Math.random()
      * (255 - 0 + 1)) + 0];
  }
  const handleClick = () => {
    setNum(randomNumberInRange(0, quotesArr.quotes.length-1));
    setRgb(randomColor());
    setColor('rgb('+rgb[0]+','+rgb[1]+','+rgb[2]+')')
  }

  useEffect(()=>{
    handleClick()
  },[])
  return(
    <div id='wrapper'
      style={{
        backgroundColor: color,
      }}
    >     
      <Card quote={quotesArr.quotes[num]} randomColor={color} change={handleClick}/>
      <div
        style={{
          color: '#fff',
          marginTop: 10
        }}
      >
        by <a href="https://github.com/YoonadiMon" target='_blank' id='a-link'>Yoonadi</a>
      </div>
    </div>
    
  );
  
}

export default App
