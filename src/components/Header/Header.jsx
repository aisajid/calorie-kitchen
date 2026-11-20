// import PropTypes from 'prop-types';
import { IoSearch } from "react-icons/io5";
import Profile from "../../assets/icons/Frame 5.png"




function Header() {
    return (
        <header className="container mx-auto mb-24">
            {/* <nav className="flex items-center justify-between py-12 mx-2">
            </nav> */}
            <div className="max-lg:collapse py-12 w-full rounded-md">
                <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
                <label htmlFor="navbar-1-toggle" className="fixed inset-0 hidden max-lg:peer-checked:block"></label>
                <div className="collapse-title navbar">
                    <div className="navbar-start">
                        <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <button className="btn btn-ghost text-[#150B2B] text-3xl font-bold ">Calorie Kitchen</button>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-base text-[#150b2bb3] flex gap-12">
                            <li><button>Home</button></li>
                            <li><button>Recipes</button></li>
                            <li><button>About</button></li>
                            <li><button>Search</button></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="flex items-center">
                            <div className="relative w-64 hidden md:flex">
                                <IoSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-[#150b2bb3]  text-lg"></IoSearch>
                                <input type="text" className="bg-[#150b2b0d] text-[#150b2bb3] rounded-full py-2 pl-10 text-base outline-hidden cursor-pointer" placeholder="Search" />
                            </div>
                            <button className="cursor-pointer"><img src={Profile} alt="Profile" className="w-8 h-8" /></button>
                        </div>
                    </div>
                </div>

                <div className="collapse-content lg:hidden z-1">
                    <ul className="menu  text-[#150b2bb3]">
                        <li><button>Home</button></li>
                        <li><button>Recipes</button></li>
                        <li><button>About</button></li>
                        <li><button>Search</button></li>
                    </ul>
                </div>
            </div>

            {/* banner section */}
            <div  className="bg-[url('/image/Rectangle.png')] bg-no-repeat bg-center bg-size-[100%_100%] 
            rounded-3xl py-6 md:px-24 md:py-28 mx-2 text-center">
                <h3 className="text-3xl md:text-5xl font-bold text-white max-w-4xl mx-auto mb-6 lg:leading-20">Discover an exceptional cooking class tailored for you!</h3>
                <p className="mb-10 text-white text-lg max-w-4xl mx-auto">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <div className="flex flex-col items-center justify-center gap-6 md:flex-rows" >
                    <button className="rounded-full text-xl font-semibold border-none bg-[#0BE58A] px-6 py-4 md:py-5 md:px-7 cursor-pointer
                    hover:bg-[#02b76c]">Explore Now</button>
                    <button className="rounded-full text-xl text-white
                     font-semibold border-2 bg-transparent px-5 py-4 md:py-5 md:px-7 cursor-pointer hover:bg-[#02b76c]">Our Feedback</button>
                </div>

            </div>
        </header>
    );
}



export default Header;