
// selectors
export const getAllCategories = state => state.categories;
export const getCategoriesByName = ({ categories }, categoryName) => categories.find(category => category === categoryName);
// actions


// actions creators

const categoriesReducer = (statePart = [], action) => {
    switch (action.type) {
        default:
         return statePart;
    };
};

export default categoriesReducer;