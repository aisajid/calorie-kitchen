// import React from 'react';
import PropTypes from 'prop-types';
import WanToClockTable from '../WantToClockTable/WanToClockTable';
import Currently from '../Currently/Currently';

const Sidebar = ({ wantToCookTable, totalTime, totalCalories, handlePreparing, currentlyTable, currentTime, currentCalories}) => {
  


    return (
        <div >
            <div>
                <div className='text-center pb-4 border-b-2 border-[#28282826] max-w-96 mx-auto mb-6'>
                    <h3 className='text-2xl font-semibold text-[#282828]'>Want to cook: {wantToCookTable.length} </h3>
                </div>

                <div className="overflow-x-auto">
                    <table className="table text-[#878787]">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th className='w-40'></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                wantToCookTable.map((tableRowRecipe, indx)=><WanToClockTable tableRowRecipe={tableRowRecipe} indx={indx} key={indx} totalTime ={totalTime}
                                handlePreparing={handlePreparing}
                                ></WanToClockTable>)
                            }

                        </tbody>
                    </table>
                </div>

                <div className='flex justify-between items-center text-[#878787] font-medium px-10 py-3 mb-7'>
                    <p>Total Time = {totalTime} minutes</p>
                    <p>Total Calories = {totalCalories} calories</p>
                </div>
            </div>
            <div>
                <div className='text-center pb-4 border-b-2 border-[#28282826] max-w-96 mx-auto mb-6'>
                    <h3 className='text-2xl font-semibold text-[#282828]'>Currently cooking:{currentlyTable.length} </h3>
                </div>

                <div className="overflow-x-auto">
                    <table className="table text-[#878787]">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                currentlyTable.map((tableRowRecipe, indx) =><Currently tableRowRecipe={tableRowRecipe} indx={indx} ></Currently>)
                            }

                        </tbody>
                    </table>
                </div>

                <div className='flex justify-between items-center text-[#878787] font-medium px-10 py-3'>
                    <p>Total Time = {currentTime} minutes</p>
                    <p>Total Calories = {currentCalories} calories</p>
                </div>
            </div>






        </div>
    );
};

Sidebar.propTypes = {
    currentlyTable: PropTypes.array.isRequired,
    wantToCookTable: PropTypes.array.isRequired,
    totalTime: PropTypes.number,
    totalCalories: PropTypes.number,

};

export default Sidebar;