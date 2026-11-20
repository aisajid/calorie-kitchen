import PropTypes from 'prop-types';

const WanToClockTable = ({tableRowRecipe,indx, handlePreparing}) => {
    console.log(tableRowRecipe);
    
    const {recipe_name , preparing_time, calories } =tableRowRecipe;
    return (
            <tr className='bg-base-200 text-base'>
            <th>{indx + 1}</th>
            <td>{recipe_name} </td>
            <td>{preparing_time} minutes </td>
            <td>{calories} calories</td>
            <td><button onClick={()=>handlePreparing(tableRowRecipe)} className='btn font-medium text-[#150B2B] px-4 py-2 rounded-full bg-[#0BE58A]'>Preparing</button></td>
            </tr>
    );
};

WanToClockTable.propTypes = {
    tableRowRecipe: PropTypes.object,
    handlePreparing: PropTypes.func,
    indx: PropTypes.number,
    
};

export default WanToClockTable;