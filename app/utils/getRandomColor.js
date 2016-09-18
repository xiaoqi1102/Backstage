/**
 * Created by xiaoqi on 2016/9/13.
 */
import * as colors from 'material-ui/styles/colors';
let basicColor=[
    'red',
    'pink',
    'purple',
    'deepPurple',
    'indigo',
    'blue',
    'lightBlue',
    'cyan',
    'teal',
    'green',
    'lightGreen',
    'lime',
    'yellow',
    'amber',
    'orange',
    'deepOrange',
    'brown',
    'blueGrey',
    'grey'
];
const getRandomCount=()=>{
    let count=Math.round(Math.random()*10)*100;
    if(count===0||count===1000){
        //console.log('count is wrong :',count);
        count=getRandomCount();
    }
    //console.log('count :',count);
    return count;
};
export  default  ()=>{
    let count=getRandomCount();
    let basicColorIndex=Math.round(Math.random()*(basicColor.length-1));
    //console.log('basicColorIndex :',basicColorIndex);
    let colorName=basicColor[basicColorIndex]+count;
    let currentColor=colors[colorName];
     //console.log('color name :',colorName);
    //console.log('current color: ',currentColor);
    return currentColor;
};