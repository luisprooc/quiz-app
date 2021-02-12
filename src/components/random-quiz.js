import React,{useEffect, useState} from 'react';
import '../styles/random.css';
import Progress from './progress';

const RandomQuiz = () => {

    const [count,setCount] = useState(false);
    const [timer,setTimer] = useState(false);
    const [question,saveQuestion] = useState({});
    const [random,setRandom] = useState(0);

    useEffect(()=>{

        if (question !== {}){
            fetch("http://127.0.0.1:5000/quiz")
                .then(res => res.json())
                .then(res => saveQuestion(res))
                .catch(error => console.log(error))
            
            setRandom(getRandomInt(1));
        }
        

    },[count]);

    const nextQuestion = e => {
        if(e.target.classList.contains("disabled")) return;
        
        e.target.classList.add("disabled");
        setCount(false);
        setTimer(true);
    };

    const getRandomInt =  (max) =>  Math.floor(Math.random() * Math.floor(max));
    

    return(
        <div className="container py-5">
            <h1>RANDOM QUIZ</h1>
            <Progress setCount={setCount} timer={timer} setTimer={setTimer}/>
            {count?(
                <div className="alert alert-dismissible alert-secondary">
                    <strong>Correct Answer: </strong> {question.Correct}
                </div>
            ):null}

            { question && (
                <div className="mt-4">
                    <h3 className="text-center">{question.Question}</h3>
                    <div className="py-4 d-flex flex-column align-items-center">
                        <button className="btn btn-info btnR">{random === 0?question.Correct:question.Incorrect}</button>
                        <button className="btn btn-info m-4 btnR">{random === 1?question.Correct:question.Incorrect}</button>
                        <button className="btn btn-info btnR">{question.Incorrect2}</button>
                    </div>
                </div>

            )}
            <div className="d-flex mt-4 justify-content-between">
                <span className="icon">{question.Category === "Ciencia"?'🔬':'👩‍💻'}</span>
                <button type="button" className={`btn btn-success ${count?"":"disabled"} btn-lg`}  onClick={(e)=> nextQuestion(e)}>Next Question</button>
            </div>
        </div>
    );
};

export default RandomQuiz;