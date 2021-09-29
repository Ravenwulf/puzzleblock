import { useState } from "react";
import Card from "./components/UI/Card";
import Grid from "./components/Grid";
import GridControls from "./components/GridControls";
// import logo from './marvin.PNG';

const SIDELENGTH = 4;
const COLORS = ['#ADD8E6', '#77DD77', '#ff6961', '#FDFD96'];
function generateColorArr(colors, sideLength) {
  let emptyObj = {};
  let count = 0;
  let num = Math.floor(Math.pow(sideLength, 2)/colors.length);
  let clrObj = colors.map(c => {
    for(let i = 0; i<num; i++) {
      emptyObj[count] = c;
      count++;
    }
    return emptyObj;
  })
//   for(const c of colors){
//     for(let i = 0; i<num; i++) {
//       arr.push(c);
//     }
//   }
  return clrObj;
}

const initCombination = generateColorArr(COLORS, SIDELENGTH);

function App() {

  const [colorCombination, setCombination] = useState(initCombination);

  //Fisher-Yates Shuffle
  const shuffleHandler = () => {
    console.log("test1" + colorCombination);
    setCombination(prevComb => {
        let newArr = prevComb;
        let currentIndex = Object.keys(newArr).length,  randomIndex;
    
        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
    
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [newArr[currentIndex], newArr[randomIndex]] = [newArr[randomIndex], newArr[currentIndex]];
        }
        console.log("test2" + newArr);
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
