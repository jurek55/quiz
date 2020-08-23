import React from 'react';
import './styles/App.min.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Description from './components/Description';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      questions: [],
      corectCounter: 0,
      uncorectCounter: 0,
      answerCounter: 0,
      subject: '',
      title: ''
     
     }
    }
    
  GetData = ()=>{
    
     const xhr = new XMLHttpRequest();
     xhr.open('POST', 'https://api.jkunicki.pl/quiz/', true);
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
  handleOnMouse=()=>{
    if (this.state.title==='żeglarstwo')
       alert('Quiz zawiera pytania z bazy na egzamin JSM (rok 2018). Baza jest w trakcie stopniowego uzupełniania. Nie gwarantuję, że wskazane poprawne odpowiedzi dokładnie odzwierciedlają klucz egzaminacyjny, zostały one zaznaczone podczas przygotowania do zdanego egzaminu');
      else if (this.state.title==='fizyka')
      alert('Quiz zawiera zestaw pytań z fizyki ogólnej o różnym stopniu trudności. Autorem pytań jest Jerzy Kunicki');
        else alert('Quiz zawiera zestaw pytań z historii. Mam nadzieję, że baza pytań będzie stopniowo uzupełniana. Autorką pytań jest Barbara Felicka')

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
   /*  console.log(copyQuestions); */
   console.log(this.state.subject);
    const quiz = copyQuestions.map((item) => {
      return (<div key={item.id}><p className='question'>{`${item.id+1}. ${item.pytanie}`}</p><p className='answer'><input type='radio' name={item.id} value={item.answers[0]} onChange={this.handleCheck}></input><label>{item.answers[0]}</label></p><p className='answer'><input type='radio' name={item.id} value={item.answers[1]} onChange={this.handleCheck}></input><label>{item.answers[1]}</label></p><p className='answer'><input type='radio'  name={item.id} value={item.answers[2]} onChange={this.handleCheck}></input><label>{item.answers[2]}</label></p></div>) 
    });
    const subject = this.state.subject;
    
    return ( 
      <React.Fragment>
      <div className="header"><Header title={this.state.title}/></div> 
      {this.state.title && <Menu reset={this.handleButtonReset}/>}
      {this.state.title && <div className='corectCounter'>{`Twój wynik: odpowiedzi poprawnych ${this.state.corectCounter} / ${this.state.answerCounter}`}</div>}
      {subject && this.GetData()}
      <div className="wraper">
      {this.state.title ? <div className='quiz'>{quiz}</div> : <Description subject={this.handleButtonMenu} />}
      {/* <div className='uncorectCounter'>{this.state.uncorectCounter}</div> */}
      </div>
      </React.Fragment>
     );
  }
}

 
export default App;
