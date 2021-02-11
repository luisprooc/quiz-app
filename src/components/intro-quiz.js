import React from 'react';
import '../styles/typography.css'

const IntroQuiz = () => {
    return(
        <div className="container">
            <h1 className="py-5">QUIZ APP</h1>
            <div className="jumbotron prueba">
                <h2 className="display-3">Welcome, user!</h2>
                <p className="text-secondary">This is a simple quiz with different categories, you can select the category of your preference or questions random.</p>
                <hr className="my-4"/>
                <p>Choose A Category To Begin.</p>
                <p className="lead d-flex justify-content-around py-2">
                    <button type="button" className="btn btn-success">RANDOM</button>
                    <button type="button" className="btn btn-success1">SCIENCE</button>
                    <button type="button" className="btn btn-success2">TECNOLOGY</button>
                </p>
                </div>
        </div>
    );
};

export default IntroQuiz;