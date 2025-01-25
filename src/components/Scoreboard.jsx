import { useEffect, useState } from 'react';

const Scoreboard = () => {
    const [score, setScore] = useState(0);
    const [overs, setOvers] = useState(0);
    const [wicket, setWicket] = useState(0);
    const [balls, setBalls] = useState(0);
    const [scoreList, setScoreList] = useState([]);

    useEffect(() => {
      setScoreList([...scoreList, score]);  
    },[score]);

    const handleScore = (value) => {
    setScore(score + value);
   
    if(balls>4){ 
        setOvers(overs + 1);
        setBalls(0);
    }else{
        setBalls(balls+1);
    }
    
    };

    const handleReset = () => {
        setScore(0);
        setWicket(0);
        setOvers(0);
        setScoreList([null]);
        setBalls(0);
    };

    const handleWicket = () => {
        setWicket(wicket + 1);
        handleScore(0);
    };

    return (
        <div>
            <div className="score">
                <h2>Score: {score}/{wicket}</h2>
            </div>
            <div className="score">
                <h3>Overs: {overs}</h3>
                <h3>Balls: {balls}</h3>
            </div>
            <div className="card">
                <button onClick={()=>handleScore(0)}>0</button>
                <button onClick={()=>handleScore(1)} >1</button>
                <button onClick={()=>handleScore(2)}>2</button>
                <button onClick={()=>handleScore(3)}>3</button>
                <button onClick={()=>handleScore(4)}>4</button>
                <button onClick={()=>handleScore(6)}>6</button>
                <button onClick={()=>handleWicket()}>Wicket</button>
            </div>
            <div className='score-list'>
                {scoreList.map((score, index) => (
                    <h2 key={index}>{score}</h2>
                ))}
            </div>
            <div>
                <button className="reset" onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export default Scoreboard;