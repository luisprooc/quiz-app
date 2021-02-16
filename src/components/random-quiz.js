import React,{useEffect, useState} from 'react';
import '../styles/random.css';
import Progress from './progress';

const RandomQuiz = () => {

    const [count,setCount] = useState(false);
    const [quiz,saveQuiz] = useState({});
    const [corrects,setCorrects] = useState(0);
    const [replied,setReplied] = useState(0);

    useEffect(()=>{

        fetch("http://127.0.0.1:5000/quiz")
            .then(res => res.json())
            .then(res => saveQuiz(res))
            .catch(error => console.log(error))

    },[]);

    // If quiz has id render it
    return quiz.id?(
        <div className="container py-5">
            <h2 className="text-center">{quiz.question}</h2>

            <Progress 
                setCount={setCount} 
                setReplied={setReplied}
                replied={replied}
            />

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
                            <button key={optId} value={opt} className="btn btn-info" style={{width:"70%", margin:"1rem auto"}}>
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