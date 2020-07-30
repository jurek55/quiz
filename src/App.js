import React from 'react';
import './App.min.css';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      questions: [{
        id: 1,
        question: 'co to jest ?',
        answer1: 'statek',
        answer2: 'samochód',
        corectAnswer: 'czołg'
      },
      {
        id: 23,
        question: 'co to jest ?',
        answer1: 'statek',
        answer2: 'samochód',
        corectAnswer: 'helikopter'
      }]
     }
  }
  
  render() { 
    const copyQuestions = [...this.state.questions];
    return ( 
      <div className='wraper'>{copyQuestions[0].answer1}</div>
     );
  }
}
 
export default App;