import { Link } from "react-router"
export default function SignIn() {
    return <div className="flex h-screen bg-black">
        <div className="w-full max-w-xs m-auto bg-gray-900 rounded p-5">

            <form>
                <div>
                    <label className="block mb-2 text-white" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="w-full p-2 mb-6 text-white border-b-2 border-green-500 outline-none focus:bg-gray-800"
                        type="text"
                        name="username"
                    />
                </div>
                <div>
                    <label className="block mb-2 text-white" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="w-full p-2 mb-6 text-white border-b-2 border-green-500 outline-none focus:bg-gray-800"
                        type="password"
                        name="password"
                    />
                </div>
                <div>
                    <input
                        className="w-full bg-green-500 hover:bg-gray-800 text-white font-bold py-2 px-4 mb-6 rounded"
                        type="submit"
                    />
                </div>
            </form>
            <footer>
                <a
                    className="text-white hover:text-green-500 text-sm float-left"
                    href="#"
                >
                    Forgot Password?
                </a>
                <Link to={"/signup"}
                    className="text-white hover:text-green-500 text-sm float-right"
                >
                    Create Account
                </Link>

            </footer>
        </div>
    </div>

}
