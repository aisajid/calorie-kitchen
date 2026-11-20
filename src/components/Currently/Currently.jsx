
import PropTypes from 'prop-types';

const Currently = ({tableRowRecipe, indx}) => {
    const {recipe_name, preparing_time, calories} =tableRowRecipe ;
    
    return (
        <tr className='bg-base-200 text-base'>
            <th>{indx + 1}</th>
            <td>{recipe_name} </td>
            <td>{preparing_time} minutes </td>
            <td>{calories} calories</td>
            </tr>
    );
};

Currently.propTypes = {
    tableRowRecipe: PropTypes.object,
    indx: PropTypes.number,
    currentlyTable: PropTypes.object,
};

export default Currently;