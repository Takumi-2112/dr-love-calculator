import { useState, useEffect } from 'react';
import './styles/App.css';
import welcomeDr from '../public/welcome-dr.png'; 
import drGene from '../public/dr-gene.png';
import drLove from '../public/dr-love.png';
import TouchButtonOne from './components/TouchButtonOne';
import TouchButtonTwo from './components/TouchButtonTwo';

function App() {
  const [touchButtonOne, setTouchButtonOne] = useState(0);
  const [touchButtonTwo, setTouchButtonTwo] = useState(0);

  useEffect(() => {
    console.log(`Touch Button One state updated to: ${touchButtonOne}`);
    console.log(`Touch Button Two state updated to: ${touchButtonTwo}`);

  }, [touchButtonOne, touchButtonTwo]);

  const touchButtonOneToggler = () => {
    setTouchButtonOne(prevState => prevState + 1);
  };

  const touchButtonTwoToggler = () => {
    setTouchButtonTwo(prevState => prevState + 1);
  };

  return (
    <div className="app-master">
      <TouchButtonOne touchButtonOneToggler={touchButtonOneToggler}/>
      <div className="content-div">  
        <div className='title-div'>
          <h1 className='title'>DR LOVE'S <span className='vday'>VDAY</span> CALCULATOR</h1>
        </div>
        {touchButtonOne === 0 && touchButtonTwo === 0 ? <div className='welcome-dr-div'><img className="welcome-dr-img" src={welcomeDr} alt="" /></div> : null}
        {touchButtonOne === 1 && touchButtonTwo === 0 ? <div className='welcome-dr-div'><img className="welcome-dr-img" src={welcomeDr} alt="" /></div> : null}
        {touchButtonOne === 0 && touchButtonTwo === 1 ? <div className='welcome-dr-div'><img className="welcome-dr-img" src={welcomeDr} alt="" /></div> : null}
        {touchButtonOne === 1 && touchButtonTwo === 1 ? <div className='gene-div'><img className="gene-img" src={drGene} alt="" /></div> : null}
        {touchButtonOne > 1 && touchButtonTwo === 1 ? <div className='gene-div'><img className="gene-img" src={drGene} alt="" /></div> : null}
        {touchButtonOne === 1 && touchButtonTwo > 1 ? <div className='gene-div'><img className="gene-img" src={drGene} alt="" /></div> : null}
        {touchButtonOne > 1 && touchButtonTwo > 1 ? <div className='dr-love-div'><img className="dr-love-img" src={drLove} alt="" /></div> : null}
      </div>
      <TouchButtonTwo touchButtonTwoToggler={touchButtonTwoToggler}/>
    </div>
  );
}

export default App;
