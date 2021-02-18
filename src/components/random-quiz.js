import React,{useEffect, useState} from 'react';
import '../styles/random.css';
import QuizComponent from './quiz-component';

const RandomQuiz = () => {

    const [count,setCount] = useState(false);
    const [quiz,saveQuiz] = useState({});
    const [corrects,setCorrects] = useState(0);
    const [replied,setReplied] = useState(0);
    const [reset,setReset] = useState(false);
    const [time,setTime] = useState(100);
    const [display, setDisplay] = useState(true);

    useEffect(()=>{

        fetch("http://127.0.0.1:5000/quiz")
            .then(res => res.json())
            .then(res => saveQuiz(res))
            .catch(error => console.log(error))

    },[reset]);

    const handlerClick = e =>{

        setDisplay(false);

        if(quiz.correct === e.target.value){

            e.target.style.background= "green";

            setCount(true);
            setReplied(replied + 1);
            setCorrects(corrects + 1);

            // Then render replieds and hidden correct answer

            setTimeout(()=>{
                setCount(false);
                setTime(100);
                reset?setReset(false):setReset(true);
                setDisplay(true);
            },5000);
        }

        else{

            e.target.style.background= "red";
            
            setCount(true);
            setReplied(replied + 1);

            // Then render replieds and hidden correct answer

            setTimeout(()=>{
                setCount(false);
                setTime(100);
                reset?setReset(false):setReset(true);
                setDisplay(true);
            },5000);
        }
    }

    // If quiz has id render it
    return quiz.id?(
        <QuizComponent 
            quiz={quiz}
            display={display}
            setCount={setCount}
            count={count}
            replied={replied}
            setReplied={setReplied}
            reset={reset}
            setReset={setReset}
            time={time}
            setTime={setTime}
            handlerClick={handlerClick}
            corrects={corrects}
        />
    ):null;
};

export default RandomQuiz;