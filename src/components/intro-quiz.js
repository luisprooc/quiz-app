import React from 'react';
import '../styles/intro.css';
import { Link } from "react-router-dom";

const IntroQuiz = () => {
    return(
        <div className="container">
            <h1 className="py-5">QUIZ APP</h1>
            <div className="jumbotron prueba">
                <h2>Welcome, user!</h2>
                <p className="text-secondary">This is a simple quiz with different categories, you can select the category of your preference or questions random.</p>
                <hr className="my-4"/>
                <p>Choose A Category To Begin.</p>
                <div className="lead py-2 div-title">
                    <Link to={"/quiz"} type="button" className="btn btn-success">RANDOM</Link>
                    <Link to={"/quiz/Ciencia"} type="button" className="btn btn-success1">SCIENCE</Link>
                    <Link to={"/quiz/Tecnologia"} type="button" className="btn btn-success2">TECNOLOGY</Link>
                </div>
                </div>
        </div>
    );
};

export default IntroQuiz;