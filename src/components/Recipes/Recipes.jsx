// import PropTypes from 'prop-types';

import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import Sidebar from "../Sidebar/Sidebar";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [wantToCookTable, setWantToCookTable] = useState([]);
    const [currentlyTable, seTCurrentlyTable] = useState([]);
    const [showToast, setShowToast] = useState(false);
    const [totalTime, setTotalTime] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);
    const [currentCalories, setCurrentCalories] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);


     useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setRecipes(data));
    }, [])

    useEffect(()=>{
        if(showToast){
            const timer = setTimeout(() =>{
                setShowToast(false);
            }, 3000);
            return ()=> clearInterval(timer);
        }
    },[showToast])




    const handleWantToCook = (recipe) => {

        if (wantToCookTable.includes(recipe)) {
            setShowToast(true);
        }
        else {
            const newTable = [...wantToCookTable, recipe];
            setWantToCookTable(newTable);
            setTotalTime(totalTime + recipe.preparing_time);
            setTotalCalories(totalCalories + recipe.calories);

        }
    }

    const handlePreparing=(recipe)=>{
        const newRecipes = wantToCookTable.filter(r => r.recipe_id != recipe.recipe_id);
        setWantToCookTable(newRecipes);
        setTotalTime(totalTime - recipe.preparing_time);
        setTotalCalories(totalCalories - recipe.calories);
        const newTable = [...currentlyTable, recipe ];
        seTCurrentlyTable(newTable);
        setCurrentCalories(currentCalories + recipe.calories);
        setCurrentTime(currentTime + recipe.preparing_time );

    }

   


    return (
        <div className="container mx-auto text-center mb-24">
            <div className="mx-2">
                {
                showToast && (
                <div className="toast toast-top toast-end z-0">
                    <div className="alert bg-[#0BE58A]">
                        <span>The Item Already Added</span>
                    </div>
                </div>
                )
            }
            <h3 className="text-[#150B2B] font-semibold text-4xl mb-6">Our Recipes</h3>
            <p className="text-base max-w-4xl text-[#150b2b99] mx-auto mb-12">Discover delicious recipes for every occasion. Explore easy-to-follow cooking ideas, fresh ingredients, and flavorful dishes to make every meal special.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* recipe container */}
                <div className="lg: col-span-7">
                    <div className=" grid md:grid-cols-2 gap-6">
                        {
                            recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe}
                                handleWantToCook={handleWantToCook}
                            ></Recipe>)
                        }

                    </div>
                </div>

                {/* sidebar */}
                <div className=" lg:col-span-5 rounded-2xl mt-6 lg:mt-0 lg:ml-6 border-2 border-[#BABABA] py-8 h-fit ">
                    <Sidebar wantToCookTable={wantToCookTable} totalTime={totalTime} totalCalories={totalCalories} handlePreparing={handlePreparing} currentlyTable={currentlyTable} currentTime={currentTime} currentCalories={currentCalories}></Sidebar>
                </div>
            </div>
            </div>
        </div>
    );
};

// Recipes.propTypes = {

// };

export default Recipes;