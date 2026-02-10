import MusicCard from "@/components/MusicCard.tsx";
function Mbody() {
  return (
    <div className="bg-black h-[90vh] w-[100vw] flex justify-between items-center">
      <div className="bg-gray-900 h-[87.5vh] w-[32.5vw] flex flex-col gap-[7px] items-center py-[15px]">
        <div className="bg-white block max-w-sm p-6 border border-default rounded-base shadow-xs w-[30vw]">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-heading">
            Create Playlist
          </h5>
          <p className="mb-3 text-body">organize all your songs together</p>
          <a
            href="#"
            className="inline-flex font-medium items-center text-fg-brand hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={"8vh"}
              height={"8vh"}
              viewBox="0 0 1024 1024"
            >
              <path
                fill="#000000"
                d="M960 640H640v320q0 27-18.5 45.5T576 1024H448q-27 0-45.5-19T384 960V640H64q-27 0-45.5-19T0 576V448q0-27 18.5-45.5T64 384h320V64q0-27 18.5-45.5T448 0h128q27 0 45.5 18.5T640 64v320h320q27 0 45.5 18.5T1024 448v128q0 26-18.5 45T960 640z"
              />
            </svg>
          </a>
        </div>
        <div className="bg-white block max-w-sm p-6 border border-default rounded-base shadow-xs w-[30vw]">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-heading">
            Favrotois
          </h5>

          <p className="mb-3 text-body">organize all your songs together</p>
          <a
            href="#"
            className="inline-flex font-medium items-center text-fg-brand hover:underline"
          >
            <svg
              width={"8vh"}
              height={"8vh"}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
            >
              <path
                fill="none"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m7 12.45l-5.52-5c-3-3 1.41-8.76 5.52-4.1c4.11-4.66 8.5 1.12 5.52 4.1Z"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="bg-gray-900 h-[87.5vh] w-[65vw] py-[15px] px-[15px]">
        <div className="grid grid-cols-5 w-[62vw] h-[85vh] overflow-auto gap-[5px]  ">
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
          <MusicCard />
        </div>
      </div>
    </div>
  );
}

export default Mbody;
