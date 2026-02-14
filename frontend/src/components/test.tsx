import { useState,useRef } from 'react';

export default function Test() {
    const [count, setCount] = useState(0);
    const audioElemnet = useRef(new Audio());
    


    return <div>

        <button onClick={() => {
            console.log(audioElemnet.current)
            audioElemnet.current.play()
        }}>play</button>
        <button onClick={() => {
            audioElemnet.current.pause()
        }}>pause</button>
        <button onClick={() => {

            audioElemnet.current.src = "http://localhost:3000/test/audio"

        }}>Change</button>


    </div>


}
