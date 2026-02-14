import React, { useState, useRef, useEffect, useContext} from 'react';
import type {MouseEvent } from 'react';
import { MusicContext } from './MusiContext';
const MusicPlayer: React.FC = () => {
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [isDragging, setIsDragging] = useState<boolean>(false);

    const progressBarRef = useRef<HTMLDivElement>(null);
    const currentSong = useContext(MusicContext)

    const duration = currentSong.duration;

    const progressPercent = (currentTime / duration) * 100;

    const updateTimeFromMouse = (clientX: number) => {
        if (!progressBarRef.current) return;
        const rect = progressBarRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const width = rect.width;
        const percentage = Math.min(Math.max(x / width, 0), 1);
        setCurrentTime(percentage * duration);
        currentSong.currentTime = percentage * duration
    };

    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        updateTimeFromMouse(e.clientX);
    };



    useEffect(() => {
        const handleMouseMove = (e: globalThis.MouseEvent) => {
            if (isDragging) updateTimeFromMouse(e.clientX);
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        const Mp = () => {
            setCurrentTime(currentSong.currentTime)
        }


        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        }

        currentSong.addEventListener('timeupdate', Mp)



        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            currentSong.removeEventListener('timeupdate', Mp)



        };
    }, [isDragging]);

    const formatTime = (time: number) => {
        const mins = Math.floor(time / 60);
        const secs = Math.floor(time % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="w-[40vw]  bg-white text-white p-2 rounded-[2.5rem] shadow-2xl border border-zinc-800">
            <div className="flex items-center justify-center space-x-10 mb-5">
                <button className="text-zinc-600 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6 8.5 6V6z" /></svg>
                </button>

                <button onClick = { () => {
                    currentSong.src = "http://localhost:3000/yx2PIdPExFR.m3u8"
                    currentSong.play()
                }}className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black hover:scale-105 active:scale-95 transition-all shadow-xl">
                    <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </button>

                <button className="text-zinc-600 hover:text-white transition-colors">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="m6 18 8.5-6L6 6zm9-12v12h2V6z" /></svg>
                </button>
            </div>

            <div className="px-2">
                <div
                    ref={progressBarRef}
                    onMouseDown={handleMouseDown}
                    className="relative h-1.5 w-full bg-zinc-800 rounded-full cursor-pointer group"
                >
                    <div
                        className="absolute top-0 left-0 h-full bg-indigo-500 rounded-full"
                        style={{ width: `${progressPercent}%` }}
                    />
                    <div
                        className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-black rounded-full shadow-md transition-transform ${isDragging ? 'scale-125' : 'scale-100'}`}
                        style={{ left: `calc(${progressPercent}% - 8px)` }}
                    />
                </div>

                <div className="flex justify-between  mt-1 text-[10px] font-bold text-zinc-500 tabular-nums tracking-widest uppercase">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                </div>
            </div>
        </div>
    );
};

export default MusicPlayer;



