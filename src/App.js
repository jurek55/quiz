import React from 'react';
import './App.min.css';
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      questions: [],
      corectCounter: 0,
      uncorectCounter: 0,
      answerCounter: 0,
     
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

      this.setState({
        questions
      })
    }
    
  }
  xhr.send();
  console.log(this.state.questions);
}

  handleCheck = (event) =>{
    
    if (event.target.value===this.state.questions[event.target.name].corectAns){
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
        console.log(event.target.name)
      };
    };   
  render() { 
    const copyQuestions = this.state.questions;
    console.log(copyQuestions);
   
    const quiz = copyQuestions.map((item) => {
      return (<div key={item.id}><p className='question'>{`${item.id+1}. ${item.pytanie}`}</p><p className='answer'><input type='radio' name={item.id} value={item.answers[0]} onChange={this.handleCheck}></input><label>{item.answers[0]}</label></p><p className='answer'><input type='radio' name={item.id} value={item.answers[1]} onChange={this.handleCheck}></input><label>{item.answers[1]}</label></p><p className='answer'><input type='radio'  name={item.id} value={item.answers[2]} onChange={this.handleCheck}></input><label>{item.answers[2]}</label></p></div>) 
    })
    
    return ( 
      <React.Fragment>
        <div className="header"><Header/>
        <div className='corectCounter'>{`odpowiedzi poprawnych ${this.state.corectCounter} / ${this.state.answerCounter}`}</div>
        </div> 
      <div className="wraper">
      <div className="header"></div>
        <div className='quiz'>{quiz}</div>
      {/* <div className='uncorectCounter'>{this.state.uncorectCounter}</div> */}
      </div>
      </React.Fragment>
     );
  }
}

 
export default App;
