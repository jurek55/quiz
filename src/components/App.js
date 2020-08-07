import React from 'react';
import '../styles/App.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      questions: [],
      corectCounter: 0,
      uncorectCounter: 0,
      answerCounter: 0
     }
    }

  componentDidMount() {
    console.log('test');
     const xhr = new XMLHttpRequest();
     xhr.open('GET', 'https://api.jkunicki.pl/quiz/', true);
     xhr.onload=()=>{
      console.log(xhr.status);
     if (xhr.status === 200){
      const questions = JSON.parse(xhr.response);
      console.log(questions[1]);

      var questionsTransform =[];
      for (var i=0; i<questions.length; i++){
          var answers=[questions[i].odp1, questions[i].odp2, questions[i].odp3];
          questionsTransform[i]={id: questions[i].id, pytanie: questions[i].pytanie, answers: answers, correctAns: questions[i].odp_poprawna}; 
      }
      console.log(questionsTransform);
      this.setState({
        questions: questionsTransform
      })
    }
    
  }
  xhr.send();
}
  handleCheck = (event) =>{
    
    if (event.target.value===this.state.questions[event.target.name-1].correctAns){
        console.log('ok');
        this.setState({
          corectCounter: this.state.corectCounter+1,
          answerCounter: this.state.answerCounter+1
        })
        
      }
      else {console.log('źle');
        this.setState({
        answerCounter: this.state.answerCounter+1
        })
      };
    };   
  render() { 
    const copyQuestions = this.state.questions;
    console.log(copyQuestions);
    /* mieszanie odpowiedzi */
    /* for (var i=0; i<copyQuestions.length; i++)
      copyQuestions[i].answers=copyQuestions[i].answers.sort(() => {return Math.random() - 0.5}); */
    /* copyQuestions=copyQuestions.sort(() => {return Math.random() -  0.5}); */

    const quiz = copyQuestions.map((item) => {
      return (<div key={item.id}><p className='question'>{item.pytanie}</p><p className='answer'><input type='radio' name={item.id} value={item.answers[0]} onChange={this.handleCheck}></input><label>{item.answers[0]}</label></p><p className='answer'><input type='radio' name={item.id} value={item.answers[1]} onChange={this.handleCheck}></input><label>{item.answers[1]}</label></p><p className='answer'><input type='radio'  name={item.id} value={item.answers[2]} onChange={this.handleCheck}></input><label>{item.answers[2]}</label></p></div>) 
    })
    
    return ( 
      <React.Fragment>
      <div className="wraper">
        <div className="header"><Header/></div>
      <div className='corectCounter'>{`odpowiedzi poprawnych ${this.state.corectCounter} / ${this.state.answerCounter}`}</div>
      <div className='quiz'>{quiz}</div>
      
      {/* <div className='uncorectCounter'>{this.state.uncorectCounter}</div> */}
      </div>
      </React.Fragment>
     );
  }
}

 
export default App;
