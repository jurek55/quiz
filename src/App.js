import React from 'react';
import './styles/App.min.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Description from './components/Description';
import kotwicaa from './img/kotwicaa.jpg';
import kotwicab from './img/kotwicab.jpg';
import kotwicac from './img/kotwicac.jpg';
import kretlika from './img/kretlikasmall.jpg';
import kretlikb from './img/kretlikbsmall.jpg';
import kretlikc from './img/kretlikcsmall.jpg';
import kuter from './img/kuter.jpg';
import plawa from './img/plawa.jpg';
import kotwiczenie from './img/kotwiczenie.jpg';

class App extends React.Component {
  
    state = { 
      questions: [],
      corectCounter: 0,
      uncorectCounter: 0,
      answerCounter: 0,
      subject: '',
      title: ''
     
     }
    
    
  GetData = ()=>{
    
     const xhr = new XMLHttpRequest();
     xhr.open('POST', 'https://api.jkunicki.pl/quiz/index_test1.php', true);
     xhr.send(JSON.stringify(this.state.subject));
     xhr.onload=()=>{
      console.log(xhr.status);
     if (xhr.status === 200){
      const questions = JSON.parse(xhr.response);

      this.setState({
        questions,
        subject: ''
        
      })
    }
    
  }
  
}
  
  handleCheck = (event) =>{
    
    if (event.target.value===this.state.questions[event.target.name].corectAns){
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

  handleButtonMenu = (event) =>{
    let press=event.target.id;
    this.setState({
      title: press
    })
    if (press==='żeglarstwo') press='sailing';
    this.setState({
      subject: press
    })
  }

  handleButtonReset=()=>{
    this.setState({
      questions: [],
      corectCounter: 0,
      uncorectCounter: 0,
      answerCounter: 0,
      subject: '',
      title: ''
    })
  }
  render() { 
    const copyQuestions = this.state.questions;
    const quiz = copyQuestions.map((item) => {
      return (
      <div key={item.id} className='quiz'>
        <p className='question'>{`${item.id+1}. ${item.pytanie}`}</p>
        {item.obrazek !=='' && <img src={item.obrazek} alt='question'/>}
        <p className='answer'><input type='radio' id={item.answers[0]} name={item.id} value={item.answers[0]} onChange={this.handleCheck}></input>
          {item.typ === 'tekst' ? <label htmlFor={item.answers[0]}>{item.answers[0]}</label> : <label htmlFor={item.answers[0]}><img src={item.answers[0]} alt='picture_a'/></label>}
        </p>
        <p className='answer'><input type='radio' id={item.answers[1]} name={item.id} value={item.answers[1]} onChange={this.handleCheck}></input>
            {item.typ === 'tekst' ? <label htmlFor={item.answers[1]}>{item.answers[1]}</label> : <label htmlFor={item.answers[1]}><img src={item.answers[1]} alt='picture_b'/></label> }
        </p>
        <p className='answer'><input type='radio' id={item.answers[2]} name={item.id} value={item.answers[2]} onChange={this.handleCheck}></input>
            {item.typ === 'tekst' ? <label htmlFor={item.answers[2]}>{item.answers[2]}</label> : <label htmlFor={item.answers[2]}><img src={item.answers[2]} alt='picture_c'/></label> }
        </p>
      </div>)
    });
    const subject = this.state.subject;
    console.log(this.state.questions);
    return ( 
      <React.Fragment>
        
        <div className="wraper">
        
         <div className="header"><Header title={this.state.title}/></div> 
          {this.state.title && <Menu reset={this.handleButtonReset}/>}
          {this.state.title && <div className='corectCounter'>{`Twój wynik: odpowiedzi poprawnych ${this.state.corectCounter} / ${this.state.answerCounter}`}</div>}
          {subject && this.GetData()}
          {!this.state.title  && <Description subject={this.handleButtonMenu} />}
          {this.state.title && <div className='quizWraper'>{quiz}</div>}
         
        </div>
        
      </React.Fragment>
     );
  }
}

 
export default App;
