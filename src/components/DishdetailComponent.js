import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


const Dish = (props) => {
    const dish = props.dish
    return (
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

const Comment = (props) => {
    const comment = props.comment
    return (
        <div key={comment.id}>
            <li><p>{comment.comment}</p></li>
            <li><p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'})
                                            .format(new Date(Date.parse(comment.date)))}
            </p></li>
        </div>
    );
}
const Comments = (props) => {
    const comments = props.comments
    const list = comments.map((comment) => {
        return <Comment comment={comment} />
    });
    return (
        <div>
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {list}
            </ul>
        </div>
    );
}

const DishDetail = (props) => {
    const dish = props.dish
    let comments = []
    if (dish) {
       comments = props.dish.comments
    } else {
        return <div></div>
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {dish && <Dish dish={dish} />}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {comments && <Comments comments={comments}/>}
                </div>
            </div>
        </div>
    );
}

export default DishDetail;