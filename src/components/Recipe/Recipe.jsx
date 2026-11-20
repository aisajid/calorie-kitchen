import PropTypes from 'prop-types';
import { IoMdStopwatch } from "react-icons/io";
import { FaGripfire } from "react-icons/fa";

const Recipe = ({ recipe, handleWantToCook }) => {
    // console.log(recipe);

    const { calories, ingredients
        , preparing_time, recipe_img, recipe_name, short_description } = recipe;


    return (
        <div className="p-6 text-left border-[#28282833] border-2 rounded-2xl ">
            <img src={recipe_img} alt="" className="rounded-2xl max-h-96" />

            <div className="border-b-2 border-[#2828281a] space-y-4 mt-6">
                <h3 className="text-xl font-semibold text-[#282828]">{recipe_name}</h3>
                <p className="text-base text-[#878787] mb-4">{short_description}</p>
            </div>
            <div className="border-b-2 border-[#2828281a] space-y-4 mt-6">
                <h3 className="text-xl font-semibold text-[#282828]">Ingredients:  {ingredients.length}</h3>
                <ul className="text-base text-[#878787] mb-4 list-disc pl-7">
                    {ingredients.map((ingredient, idx)=> <li key={idx}> {ingredient}</li>)}

                </ul>
            </div>
            <div className='text-[#282828cc] flex py-6 gap-3'>
                <div className='flex gap-1 items-center '>
                    <IoMdStopwatch className='w-6 h-6' />
                <span >{preparing_time} minutes</span>
                </div>
                <div className='flex items-center'>
                    <FaGripfire className='w-6 h-6' />
                <span>{calories} calories</span>
                </div>
            </div>
            <button onClick={()=>handleWantToCook(recipe)} className='bg-[#0be58a] text-[#150B2B] text-base font-medium rounded-full px-6 py-3 cursor-pointer hover:bg-[#02b76c]'>Want to Cook</button>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.array,
};


export default Recipe;