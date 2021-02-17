import React,{ useEffect } from 'react';

const Progress = ({ setCount,setReplied,replied,reset,setReset, setTime, time }) => {

    useEffect(() => {
        timer();

    },[time]);

    const timer = () => {

        setTimeout(()=>{

            if(time > 0){

                // rest time
                setTime(time - 0.9);
                
            }

            // wait 500 miliseconds and render correct answer
            else{
                setTimeout(()=>{
                    setCount(true);
                    setReplied(replied + 1);

                },500);

                // Then render replieds and hidden correct answer

                setTimeout(()=>{
                    setCount(false);
                    setTime(100);
                    reset?setReset(false):setReset(true);
                },5000);

                return;
            }

        },90);

    };

    return(
            <div className="progress">
                <div className="progress-bar  bg-success" role="progressbar" style={{width: `${time}%`}} aria-valuenow={time} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
    );
};

export default Progress;