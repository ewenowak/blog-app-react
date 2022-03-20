// selectors
export const getAllPosts = state => state.posts;
export const getPostbyId = ({posts}, id) => posts.find(post => post.id === id)


// actions
const createActionName = actionName => `app/cards/${actionName}`;
const DELETE_POST = createActionName('DELETE_POST');

// actions creators
export const deletePost = payload => ({type: DELETE_POST, payload});

const postsReducer = (statePart = [], action) => {
    switch (action.type) {
        case DELETE_POST:
            return statePart.filter(post => post.id !== action.payload);
        default:
         return statePart;
    };
};

export default postsReducer;