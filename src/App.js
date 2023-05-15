import { useState } from 'react';
import './App.css';
import Question from './Question';
import data from './data';

function App() {
const[questions, setQuestions] = useState(data);
  return (
    <div className="App">
      <div className='accardeon_fraim'>
        <h4>سوالی برای شما پیش آمده است؟</h4>
        <div className='info'>
          {
            questions.map((question)=>{
              return <Question {...question} key={question.id}/>
            })
          }
          
        </div>
      </div>
    
    </div>
  );
}

export default App;
