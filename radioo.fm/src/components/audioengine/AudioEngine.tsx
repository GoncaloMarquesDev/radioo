import { useEffect, useRef } from "react";
import {useRadio}  from "../../context/RadioContext"

function  AudioEngine(){
    const {currentStation}=useRadio();
    const audioRef = useRef<HTMLAudioElement>(null);
    
    useEffect(()=>
    {
        if(currentStation && audioRef.current){
            audioRef.current.play().catch(err=>{
                console.warn(" Autoplay bloqueado pelo browser. o utilizador precisa de interagir primeiro", err);
            })
        }
    },[currentStation]);

return(
    <audio
    ref={audioRef}
    src=  { currentStation?.url_resolved}
    style={{display:"none"}}//o player fica escondido
    />
);
}
export default AudioEngine;