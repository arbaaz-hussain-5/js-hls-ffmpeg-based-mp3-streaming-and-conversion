import { MusicCard } from "@/components/MusicCard";
import { MusicContext } from "@/components/MusiContext";
import MusicPlayer from "@/components/MusicPlayer";
import Navbar from "@/components/Navbar";
import { useContext } from "react";
import { Link } from "react-router";
export default function Playlist() {



    return <div className="relative">
        <Navbar />
        <div className="bg-gray-900 h-[10vh] w-[100vw] flex">

            <div className="flex items-center gap-[10px] pl-[5px]" >
                <Link to="/signin"><button className="cursor-pointer transition-all bg-blue-500 text-white px-6 h-[8vh] rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                    +NEW
                </button></Link>
                <Link to="/signin"><button className="cursor-pointer transition-all bg-pink-500 text-white px-6 h-[8vh] rounded-lg
border-pink-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                    FAVROITE
                </button></Link>

            </div>
        </div>


        <div className="pl-[5px] grid grid-cols-8 overflow-auto gap-[5px]  bg-black h-[80vh] w-[100vw] flex justify-between items-center">



            <Link to="/Song">   <MusicCard songName="Arbaaz" songImgUrl="https://m.media-amazon.com/images/I/81p6paS5TzL._UF1000,1000_QL80_.jpg" /></Link>
            <Link to="/Song">   <MusicCard songName="Arbaaz" songImgUrl="https://m.media-amazon.com/images/I/81p6paS5TzL._UF1000,1000_QL80_.jpg" /></Link>

            <Link to="/Song">   <MusicCard songName="Arbaaz" songImgUrl="https://m.media-amazon.com/images/I/81p6paS5TzL._UF1000,1000_QL80_.jpg" /></Link>

            <Link to="/Song">   <MusicCard songName="Arbaaz" songImgUrl="https://m.media-amazon.com/images/I/81p6paS5TzL._UF1000,1000_QL80_.jpg" /></Link>

            <Link to="/Song">   <MusicCard songName="Arbaaz" songImgUrl="https://m.media-amazon.com/images/I/81p6paS5TzL._UF1000,1000_QL80_.jpg" /></Link>
            <Link to="/Song">   <MusicCard songName="Arbaaz" songImgUrl="https://m.media-amazon.com/images/I/81p6paS5TzL._UF1000,1000_QL80_.jpg" /></Link>


            <Link to="/Song">   <MusicCard songName="Arbaaz" songImgUrl="https://m.media-amazon.com/images/I/81p6paS5TzL._UF1000,1000_QL80_.jpg" /></Link>
            <Link to="/Song">   <MusicCard songName="Arbaaz" songImgUrl="https://m.media-amazon.com/images/I/81p6paS5TzL._UF1000,1000_QL80_.jpg" /></Link>

            <Link to="/Song">   <MusicCard songName="Arbaaz" songImgUrl="https://m.media-amazon.com/images/I/81p6paS5TzL._UF1000,1000_QL80_.jpg" /></Link>




            <Link to="/Song">   <MusicCard songName="Arbaaz" songImgUrl="https://m.media-amazon.com/images/I/81p6paS5TzL._UF1000,1000_QL80_.jpg" /></Link>
            <Link to="/Song">   <MusicCard songName="Arbaaz" songImgUrl="https://m.media-amazon.com/images/I/81p6paS5TzL._UF1000,1000_QL80_.jpg" /></Link>
            <Link to="/Song">   <MusicCard songName="Arbaaz" songImgUrl="https://m.media-amazon.com/images/I/81p6paS5TzL._UF1000,1000_QL80_.jpg" /></Link>

            <Link to="/Song">   <MusicCard songName="Arbaaz" songImgUrl="https://m.media-amazon.com/images/I/81p6paS5TzL._UF1000,1000_QL80_.jpg" /></Link>

            <Link to="/Song">   <MusicCard songName="Arbaaz" songImgUrl="https://m.media-amazon.com/images/I/81p6paS5TzL._UF1000,1000_QL80_.jpg" /></Link>
            <Link to="/Song">   <MusicCard songName="Arbaaz" songImgUrl="https://m.media-amazon.com/images/I/81p6paS5TzL._UF1000,1000_QL80_.jpg" /></Link>
            <Link to="/Song">   <MusicCard songName="Arbaaz" songImgUrl="https://m.media-amazon.com/images/I/81p6paS5TzL._UF1000,1000_QL80_.jpg" /></Link>


            <Link to="/Song">   <MusicCard songName="Arbaaz" songImgUrl="https://m.media-amazon.com/images/I/81p6paS5TzL._UF1000,1000_QL80_.jpg" /></Link>

            <Link to="/Song">   <MusicCard songName="Arbaaz" songImgUrl="https://m.media-amazon.com/images/I/81p6paS5TzL._UF1000,1000_QL80_.jpg" /></Link>
            <Link to="/Song">   <MusicCard songName="Arbaaz" songImgUrl="https://m.media-amazon.com/images/I/81p6paS5TzL._UF1000,1000_QL80_.jpg" /></Link>

            <Link to="/Song">   <MusicCard songName="Arbaaz" songImgUrl="https://m.media-amazon.com/images/I/81p6paS5TzL._UF1000,1000_QL80_.jpg" /></Link>



        </div>
        <div className="fixed bottom-0 w-[100vw]  flex justify-center" ><MusicPlayer /></div>
    </div>
}
