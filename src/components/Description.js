import React from 'react';

const Description = (props) => {
    return ( 
        <div className='description'>
            <section>
                <h2 id='historia' onClick={props.subject}>historia</h2>
                <article>Pytania z historii powszechnej. Barbara Felicka</article>
                <h2 id='fizyka' onClick={props.subject}>fizyka</h2>
                <article>Pytania z fizyki ogólnej o różnym stopniu trudności. Jerzy Kunicki</article>
                <h2 id='żeglarstwo' onClick={props.subject}>żeglarstwo</h2>
                <article>Pytania z bazy pytań PZŻ na egzamin JSM. Odpowiedzi bez gwarancji zbieżności z kluczem egzaminacyjnym. Poprawne odpowiedzi zostały zaznaczone w czasie przygotowywania się do - zdanego - egzaminu.</article>
            </section>
        </div>
     );
}
 
export default Description;