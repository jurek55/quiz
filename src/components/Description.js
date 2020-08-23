import React from 'react';

const Description = (props) => {
    return ( 
        <div className='description'>
            <section>
                <h2 id='historia' onClick={props.subject}>historia</h2>
                <article>Pytania z historii powszechnej.</article>
                <h2 id='fizyka' onClick={props.subject}>fizyka</h2>
                <article>Pytania z fizyki ogólnej o różnym stopniu trudności.</article>
                <h2 id='żeglarstwo' onClick={props.subject}>żeglarstwo</h2>
                <article>Pytania z bazy pytań PZŻ na egzamin JSM. Nie wszystkie odpowiedzi zaznaczone jako poprawne zostały zweryfikowane kluczem egzaminacyjnym. Poprawne odpowiedzi zostały zaznaczone w czasie przygotowywania się do - zdanego - egzaminu. Możesz pomóc w ewentualnych korektach odpowiedzi przesyłając swoje uwagi na adres: <p style={{color: 'blue', textAlign: 'center'}}>jerzy.kunicki@gmail.com</p></article>
            </section>
        </div>
     );
}
 
export default Description;