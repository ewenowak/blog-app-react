import { useDispatch } from "react-redux";
import { addPost } from "../../redux/postsReducer";
import { useNavigate } from "react-router-dom";
import PostForm from "./PostForm";
import PropTypes from 'prop-types';

const AddPostForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = post => {
        dispatch(addPost(post));
        navigate("/");
    };


    return (
        <PostForm action={handleSubmit} actionText='Add post' />
    );
};

AddPostForm.propTypes= {
    handleSubmit: PropTypes.func.isRequired,
};

export default AddPostForm;

