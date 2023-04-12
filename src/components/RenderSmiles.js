import React, {useState, useEffect} from 'react';
import smileOne from '../img/smile1.jpeg'
import smileTwo from '../img/smile2.jpeg';
import smileThree from '../img/smile3.jpeg';


const RenderSmiles = ({isButtonClicked}) => {
    const [smiles, setSmiles] = useState([
    {id: 1, src: smileOne, likes:0},
    {id: 2, src: smileTwo, likes:0},
    {id: 3, src: smileThree, likes:0},
  ]);

  const handleLike = (index) => {
  const newSmiles = [...smiles];
  newSmiles[index].likes++;
  setSmiles(newSmiles);
};
  
  if(isButtonClicked){
    const maxLikesObj = smiles.reduce(function(prev, curr){
        return prev.likes > curr.likes ? prev : curr;
     })

     return (
        <div key={maxLikesObj.id}>
        <img className='smile'  src={maxLikesObj.src} alt=""/>  
      </div>
     )
    } else{
    return smiles.map((smile, index)=>(
    <div key={smile.id}>
      <img className='smile'  src={smile.src} alt=""/>
      <button className='smileBtn' onClick={() => handleLike(index)}> Такий: {smiles[index].likes}</button>
    </div>
    ))

}

};
export default RenderSmiles;