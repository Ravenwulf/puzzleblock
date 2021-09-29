import { useState } from "react";
import Card from "./components/UI/Card";
import Grid from "./components/Grid";
import GridControls from "./components/GridControls";
// import logo from './marvin.PNG';

const SIDELENGTH = 4;
const COLORS = ['#ADD8E6', '#77DD77', '#ff6961', '#FDFD96'];
function generateColorArr(colors, sideLength) {
  let arr = [];
  let num = Math.floor(Math.pow(sideLength, 2)/colors.length);
  for(const c of colors){
    for(let i = 0; i<num; i++) {
      arr.push(c);
    }
  }
  return arr;
}

const initCombination = generateColorArr(COLORS, SIDELENGTH);

function App() {

  const [colorCombination, setCombination] = useState(initCombination);

  //Fisher-Yates Shuffle
  const shuffleHandler = () => {
    console.log("test1");
    setCombination(prevComb => {
        let newArr = prevComb;
        let currentIndex = newArr.length,  randomIndex;
    
        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
    
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [newArr[currentIndex], newArr[randomIndex]] = [newArr[randomIndex], newArr[currentIndex]];
        }
        console.log("test2");
        return newArr;
    })
  }

  return (
    <Card>
        <Grid colors={colorCombination} />
        <GridControls onShuffle={shuffleHandler} />
    </Card>
  );
}

export default App;
