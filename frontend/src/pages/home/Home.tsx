import Navbar from "@/components/Navbar.tsx";
import Mbody from "@/components/Mbody.tsx";
import { Outlet } from "react-router";
import Playlist from "../playlist/Playlist";



function Home() {
  return (
    <div className="h-[100vh] w-[100vw] bg-white">
      <Navbar />
      <Mbody Sam={Outlet} />
    </div>
  );
}

export default Home;
