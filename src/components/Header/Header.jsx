// import PropTypes from 'prop-types';
import { IoSearch } from "react-icons/io5";
import Profile from "../../assets/icons/Frame 5.png"




function Header() {
    return (
        <header className="container mx-auto mb-24">
            <nav className="flex items-center justify-between py-12 mx-2">
                <div>
                    <h3 className="text-[#150B2B] text-3xl font-bold">Calorie Kitchen</h3>
                </div>
                <div>
                    <ul className="text-base text-[#150b2bb3] flex gap-12">
                        <li>Home</li>
                        <li>Recipes</li>
                        <li>About</li>
                        <li>Search</li>
                    </ul>
                </div>
                <div className="flex items-center">
                    <div className="relative w-64">
                        <IoSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-[#150b2bb3]  text-lg"></IoSearch>
                        <input type="text" className="bg-[#150b2b0d] text-[#150b2bb3] rounded-full py-2 pl-10 text-base outline-hidden" placeholder="Search"/>
                    </div>
                    <img src={Profile} alt="Profile" className="w-8 h-8" />
                </div>
            </nav>

            {/* banner section */}
            <div className="bg-[url(image/Rectangle.png)] bg-no-repeat bg-center bg-size-[100%_100%] 
            rounded-3xl px-24 md:py-28 mx-2 text-center">
                <h3 className="text-5xl font-bold text-white max-w-4xl mx-auto mb-6 leading-20">Discover an exceptional cooking class tailored for you!</h3>
                <p className="mb-10 text-white text-lg max-w-4xl mx-auto">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <div >
                    <button className="rounded-full text-xl font-semibold border-none bg-[#0BE58A] py-5 px-7 mr-6 cursor-pointer
                    hover:bg-[#02b76c]">Explore Now</button>
                    <button className="rounded-full text-xl text-white
                     font-semibold border-2 bg-transparent py-5 px-7 cursor-pointer hover:bg-[#02b76c]">Our Feedback</button>
                </div>

            </div>
        </header>
    );
}

Header.propTypes = {

};

export default Header;