import React from 'react';

const MealDetails = ({params}) => {
    return (
        <div>
            <h1>{params.mealSlug} dynamic page</h1>
        </div>
    );
};

export default MealDetails;