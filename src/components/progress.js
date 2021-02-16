import React,{useEffect,useState} from 'react';

const Progress = ({setCount,setReplied,replied}) => {
    let [time,setTime] = useState(100);


    useEffect(() => {
        timer();

    },[time]);

    const timer = () => {

        setTimeout(()=>{

            if(time > 0){

                // rest time
                setTime(time-=0.9);
                
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