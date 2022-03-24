import { Card, Button, Row, Col} from "react-bootstrap";
import { useSelector } from "react-redux"
import { getAllPosts } from "../../redux/postsReducer"
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const AllPosts = () => {
    const posts = useSelector(getAllPosts);
    return (
        <Row xs={1} md={3} className="g-4">
            {posts.map( post => 
            <Col key={post.id}>
                <Card>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text><b>Author:</b> {post.author}</Card.Text>
                        <Card.Text><b>Published:</b> {post.publishedDate}</Card.Text>
                        <Card.Text>{post.shortDescription}</Card.Text>
                        <Button as={Link} to={"/post/" + post.id} type="primary">Read more</Button>
                    </Card.Body>
                </Card>
            </Col>)}
        </Row>
    );
};

AllPosts.propTypes={
    posts: PropTypes.array.isRequired,
};

export default AllPosts;