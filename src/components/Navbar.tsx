import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome"
import { faCode } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link"
import { useRouter } from "next/router"
import { useRef, useEffect } from "react"
const Navbar = () => {
    const menu = useRef<HTMLInputElement | null>(null)
    const searchbar = useRef<HTMLInputElement | null>(null)
    const router = useRouter()
    const toogleMenu = (): void => {
        if (menu.current) {
            menu.current.classList.toggle("hidden")
        }
    }
    const hideNavbar = (): void => {
        if (menu.current) {
            menu.current.classList.add("hidden")
        }
        if (searchbar.current) {
            searchbar.current.classList.add("hidden")
        }
    }
    const toogleSearch = (): void => {
        if (searchbar.current) {
            searchbar.current.classList.toggle("hidden")
        }
    }
    useEffect(() => {
        router.events.on('routeChangeComplete', hideNavbar)
        return () => {
            router.events.off('routeChangeComplete', hideNavbar)
        };
    }, [router.events]);
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Link href="/" className="flex items-center gap-2">
                <span><FontAwesomeIcon icon={faCode} /></span>
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Code Blocks</span>
                </Link>
                <div className="flex md:order-2">
                    <button onClick={toogleSearch} type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Search</span>
                    </button>
                    <div className="relative hidden md:block">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Search icon</span>
                        </div>
                        <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
                    </div>
                    <button onClick={toogleMenu} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                        <span className="sr-only">Open menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div ref={searchbar} className="items-center hidden justify-between w-full md:flex md:w-auto md:order-1">
                    <div className="relative mt-3 md:hidden">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." />
                    </div>
                </div>
                <div ref={menu} className={`items-center transition-all  hidden justify-between w-full md:flex md:w-auto md:order-1 `} id="navbar-search">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                        <li>
                            <Link href="/" className={`block py-2 pl-3 pr-4 ${router.pathname == "/" ? "bg-blue-700 text-white md:text-blue-700" : "text-gray-700 bg-white"} rounded md:bg-transparent md:p-0`} aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className={`block py-2 pl-3 pr-4 ${router.pathname == "/about" ? " md:text-blue-700 bg-blue-700 text-white" : "text-gray-700 bg-white"} rounded md:bg-transparent md:p-0`}>About</Link>
                        </li>
                        <li>
                            <Link href="/service" className={`block py-2 pl-3 pr-4 ${router.pathname == "/service" ? " md:text-blue-700 bg-blue-700 text-white" : "text-gray-700 bg-white "} rounded md:bg-transparent md:p-0`}>Services</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar