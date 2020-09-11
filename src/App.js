import React from 'react';
import './styles/App.min.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Description from './components/Description';


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
     xhr.open('POST', 'https://api.jkunicki.pl/quiz/index_test.php', true);
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
        <p className='answer'><input type='radio' id={item.answers[0]} name={item.id} value={item.answers[0]} onChange={this.handleCheck}></input>
          {item.typ === 'tekst' ? <label htmlFor={item.answers[0]}>{item.answers[0]}</label> : <img src={item.answers[0]} alt='pica'/>}
        </p>
        <p className='answer'><input type='radio' id={item.answers[1]} name={item.id} value={item.answers[1]} onChange={this.handleCheck}></input>
            {item.typ === 'tekst' ? <label htmlFor={item.answers[1]}>{item.answers[1]}</label> : <img src={item.answers[1]} alt='picb'/> }
        </p>
        <p className='answer'><input type='radio' id={item.answers[2]} name={item.id} value={item.answers[2]} onChange={this.handleCheck}></input>
            {item.typ === 'tekst' ? <label htmlFor={item.answers[2]}>{item.answers[2]}</label> : <img src={item.answers[2]} alt='picc'/> }
        </p>
      </div>)
    });
    const subject = this.state.subject;
    
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
