import React,{useEffect,useState} from 'react';

const Progress = ({setCount,timer,setTimer}) => {
    let [time,setTime] = useState(100);

    useEffect(()=>{
        setTimeout(()=>{
            if(time < 0){
                setCount(true);
                if(timer){
                    setTime(110);
                    setTimer(false);
                }
                return;
            };
            
            setTime(time-=0.9);
        },90);
    });

    return(
            <div className="progress">
                <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: `${time}%`}} aria-valuenow={time} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
    );
};

export default Progress;