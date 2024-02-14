import React, { useEffect, useState } from 'react'

function Counter () {
    
    const [item,setItem]=useState(0)
    const [isRunning,setIsRunning]=useState(false);

    useEffect(()=>{
        let interval;
        if(isRunning){
            interval=setInterval(()=>{
                setItem((preTime)=>preTime+1)
            },1000)
        }
        else{
            clearInterval(interval)
        }  
    return ()=>{
        clearInterval(interval)
    }  },[isRunning])


    const startStop=()=>{
        setIsRunning(!isRunning)
        
    }
    const reset=()=>{
        setItem(0);
        setIsRunning(!isRunning)
    }
    const FormatTime=()=>{
        let second=item
        const hours=Math.floor(second/3600);
        const minutes=Math.floor((second%3600)/60)
        const remainingSeconds=second%60;
        const pad=(num)=>(num<10?"0"+ num:num);
        return `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`
    }
  return (
    <div>
        <h1>StopWatch</h1>
        <button>{FormatTime()}</button>
        <button onClick={startStop}>{isRunning?"Stop":"Start"}</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter