

export default function Navbar() {
    return (
        <div className="h-[10vh] w-[100vw] bg-black flex justify-between items-center ">
            <div className="flex items-center gap-[60px]"  >

                <svg width="8vh" height="8vh" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="90" fill="#f4f4f9" />

                    <path d="M50 120 L80 120 L100 60 L120 140 L140 100 L160 100"
                        stroke="#3b82f6"
                        stroke-width="8"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round" />

                    <circle cx="160" cy="100" r="10" fill="#ef4444" />

                    <line x1="60" y1="145" x2="140" y2="145" stroke="#94a3b8" stroke-width="4" stroke-linecap="round" stroke-dasharray="1 12" />
                </svg>
                <div className="flex items-center gap-[10px]" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="8vh" height="8vh" viewBox="0 0 432 384">
                        <path fill="white" d="M171 363H64V192H0L213 0l214 192h-64v171H256V235h-85v128z" />
                    </svg>
                    <div className="flex px-4 py-3 rounded-md border-2 border-blue-500 h-[8vh] w-[35vw]  overflow-hidden max-w-md ">
                        <svg
                            className="fill-gray-600 mr-3 rotate-90"
                            viewBox="0 0 192.904 192.904"
                            width="16px"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                        </svg>
                        <input
                            className="w-full outline-none bg-transparent text-gray-600 text-sm"
                            placeholder="Search Something..."
                            type="email"
                        />
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-[10px]" >
                <button className="cursor-pointer transition-all bg-blue-500 text-white px-6 h-[8vh] rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                    SIGN IN
                </button>
                <button className="cursor-pointer transition-all bg-blue-500 text-white px-6 h-[8vh] rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                    SIGN UP
                </button>
            </div>
        </div>
    )
}
