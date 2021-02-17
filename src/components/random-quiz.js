import React,{useEffect, useState} from 'react';
import '../styles/random.css';
import Progress from './progress';

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
        <div className="container py-5">
            <h2 className="text-center">{quiz.question}</h2>

            {display?<Progress 
                setCount={setCount} 
                setReplied={setReplied}
                replied={replied}
                reset={reset}
                setReset={setReset}
                time={time}
                setTime={setTime}
            />:null}

            {/*If count is true, render correct answer otherwise show replieds */}

            {count?(
                <div className="alert alert-dismissible alert-secondary">
                    <strong>Correct Answer: </strong> {quiz.correct}
                </div>
            ):(
                <div className="alert alert-dismissible alert-light">
                    <strong>Corrects: {corrects} -- Replied: {replied}</strong>
                </div>
            )}

            <div className="mt-4">
                <div className="py-2 d-flex flex-column align-items-center">

                    {/*Display answers */}

                    {quiz.answers.sort((a,b) => a.optId - b.optId).map(item =>{
                        const {opt,optId} = item;
                        return(
                            <button 
                                key={optId} 
                                value={opt} 
                                className="btn btn-info btnR" 
                                style={{width:"70%", margin:"1rem auto"}}
                                onClick={handlerClick}
                                >
                                {opt}
                            </button>
                        )
                    })}
                </div>
            </div>

            <div className="d-flex mt-4 justify-content-between">
                <span className="icon" role="icon">Category: {quiz.category === "Ciencia"?'🔬':'👩‍💻'}</span>
            </div>
        </div>
    ):null;
};

export default RandomQuiz;