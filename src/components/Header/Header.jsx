// import PropTypes from 'prop-types';
import { IoSearch } from "react-icons/io5";
import Profile from "../../assets/icons/Frame 5.png"




function Header() {
    return (
        <header className="mt-3 max-w-7xl mx-auto">
            <nav className="flex items-center justify-between">
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
            <div className="bg-[url()]">

            </div>
        </header>
    );
}

Header.propTypes = {

};

export default Header;