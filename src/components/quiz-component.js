import React from 'react';
import Progress from './progress';

const QuizComponent = ({ quiz,display,setCount,count,replied,setReplied,reset,setReset,time,setTime,handlerClick, corrects }) => (
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
);

export default QuizComponent;