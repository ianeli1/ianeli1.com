import { useEffect, useRef } from "react";

export const useInterval = (callback: () => void, delay: number) => {
    const savedCallback = useRef<() => void>();
  
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    useEffect(() => {
      function tick() {
          savedCallback.current &&
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
      return
    }, [delay]);
  };


export function calcTimePassed(date: Date){
    const diff = Math.abs(Math.floor((Date.now() - +date) / 1000))
    if(diff < 60){
        return `${diff}s`
    }
    if(diff < 60*60){
        return `${Math.floor(diff/60)}min`
    }
    if(diff < 60*60*24){
        return `${Math.floor(diff/3600)}h`
    }
    if(diff < 60*60*24*7){
        return `${Math.floor(diff/3600/24)}d`
    }
    return `${date.getMonth()+1}/${date.getDate()}`
}