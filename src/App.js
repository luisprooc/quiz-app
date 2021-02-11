import React,{useEffect, useState} from 'react';
import IntroQuiz from './components/intro-quiz';
import ScienceQuiz from './components/science-quiz';
import TecnologyQuiz from './components/tecnology-quiz';
import RandomQuiz from './components/random-quiz';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  const [question,saveQuestion] = useState({});


  return(
      <section>
        <Router>
          <Switch>
            <Route 
              exact path="/" component={() => <IntroQuiz />}
            />

            <Route 
                path="/quiz" component={() => <RandomQuiz />}
            />

            <Route 
                path="/quiz/Ciencia" component={() => <ScienceQuiz />}
            />

            <Route 
                path="/quiz/Tecnologia" component={() => <TecnologyQuiz />}
            />

          </Switch>
        </Router>
      </section>
  );
};


export default App;
