import React, { ReactElement } from 'react';
import './App.css';
import Carousel from './carousel/Carousel';

const testData=[
  {name:"test1",
  color:"red"},
  {name:"test 2",
  color:"green"},
  {name:"test 3",
  color:"blue"},
  {name:"test 4",
  color:"pink"},
]


interface Props {
  name:string,
  color:string
}
function Test(props: Props): ReactElement {
  return (
    <div style={{backgroundColor:props.color, minWidth:200}}>
      <h1>{props.name}</h1>
      
    </div>
  )
}


function App() {
  return (
    <div className="App" style={{display:"grid",placeContent:"center"}}>
      <Carousel width={200} height={200}>
        {testData.map(element=>
          <Test key={element.name} name={element.name} color={element.color}/>
        )}

      </Carousel>
     
    </div>
  );
}

export default App;
