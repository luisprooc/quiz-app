import React,{useEffect, useState,createRef} from 'react';
import '../styles/random.css';

const RandomQuiz = () => {

    let [time,setTime] = useState(100);
    const buttonRef = createRef();
    const [question,saveQuestion] = useState({});

    useEffect(()=>{

        if (question !== {}){
            fetch("http://127.0.0.1:5000/quiz")
                .then(res => res.json())
                .then(res => saveQuestion(res))
                .catch(error => console.log(error))
        }

        /*
        setTimeout(()=>{
            if(time < 0){
                buttonRef.current.classList.remove("disabled");
                return;
            };
            
            setTime(time-=0.9);
        },90);*/

    },[]);


    return(
        <div className="container py-5">
            <h1>RANDOM QUIZ</h1>
            <div className="progress">
                <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: `${time}%`}} aria-valuenow={time} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            {time <= 0?(
                <div class="alert alert-dismissible alert-success">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                    <strong>Well done!</strong> You successfully read
                </div>
            ):null}

            { question && (
                <div className="mt-4">
                    <p className="icon">{question.Category === "Ciencia"?'🔬':'👩‍💻'}</p>
                    <h3 className="text-center">{question.Question}</h3>
                </div>

            )}
            <div className="d-flex mt-5 justify-content-end">
                <button type="button" className="btn btn-success disabled btn-lg" ref={buttonRef} onClick={()=>{alert("e")}}>Next Question</button>
            </div>
        </div>
    );
};

export default RandomQuiz;