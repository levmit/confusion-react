import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({ dish }) {
    return (
        <div className="col=12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({ comments }) {
    const commentlist = comments.map((comment) => {
        return (
            <li>
                <div key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                </div>
            </li>

        )
    });

    return (
        <div className="col=12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul class="list-unstyled">
                {commentlist}
            </ul>
        </div>
    );

}

const DishDetail = (props) => {

    if (props.dish == null) {
        return (<div></div>);
    }
    else {
        return (
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.dish.comments} />

                </div>
            </div>
        );
    }
}

export default DishDetail;