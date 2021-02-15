import React,{useEffect, useState} from 'react';
import '../styles/random.css';
import Progress from './progress';

const RandomQuiz = () => {

    const [count,setCount] = useState(false);
    const [quiz,saveQuiz] = useState({});

    useEffect(()=>{

        fetch("http://127.0.0.1:5000/quiz")
            .then(res => res.json())
            .then(res => saveQuiz(res))
            .catch(error => console.log(error))

    },[count]);

    const nextQuestion = e => {
        if(e.target.classList.contains("disabled")) return;
        
        e.target.classList.add("disabled");
        setCount(true);
    };
    

    return(
        <div className="container py-5">
            <h1>RANDOM QUIZ</h1>
            <Progress setCount={setCount} />
            {count?(
                <div className="alert alert-dismissible alert-secondary">
                    <strong>Correct Answer: </strong> {quiz.correct}
                </div>
            ):null}

            { quiz.id && (
                <div className="mt-4">
                    <h3 className="text-center">{quiz.question}</h3>
                    <div className="py-4 d-flex flex-column align-items-center">
                        {quiz.answers.sort((a,b) => a.optId - b.optId).map(item =>{
                            const {opt,optId} = item;
                            return(
                                <div key={optId}>
                                    <p>{opt}</p>
                                    
                                </div>
                            )
                        })}
                    </div>
                </div>

            )}
            <div className="d-flex mt-4 justify-content-between">
                <span className="icon">{quiz.Category === "Ciencia"?'🔬':'👩‍💻'}</span>
                <button type="button" className={`btn btn-success ${count?"":"disabled"} btn-lg`}  onClick={(e)=> nextQuestion(e)}>Next Question</button>
            </div>
        </div>
    );
};

export default RandomQuiz;