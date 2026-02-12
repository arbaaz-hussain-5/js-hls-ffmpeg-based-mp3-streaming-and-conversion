import Navbar from "@/components/Navbar.tsx";
import Mbody from "@/components/Mbody.tsx";


function Home() {
  return (
    <div className="h-[100vh] w-[100vw] bg-white">
      <Navbar />
      <Mbody/>
    </div>
  );
}

export default Home;
