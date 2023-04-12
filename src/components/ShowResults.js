import React, {useState} from 'react';
import RenderSmiles from './RenderSmiles';
import ResultBtn from './ResultBtn';

  const ShowResults = () => {
        const [isButtonClicked, setIsButtonClicked] = useState(false);
        const [isHidden, setIsHidden] = useState(false);
        const [title, setTitle] = useState('Який ти сьогодні?')
        console.log(isButtonClicked)

        const handleClick = () => {
          setIsButtonClicked(true)
          setIsHidden(true);
          setTitle('Такий!');
        }

        return (
        <div >
        <h1 className='title'>{title}</h1>
       { <RenderSmiles isButtonClicked={isButtonClicked} />}
       {!isHidden  && <ResultBtn onClick={handleClick}/>}
            </div>
        );
   
};

export default ShowResults;