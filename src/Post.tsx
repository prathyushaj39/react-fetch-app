
import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
const Post = ({ body }: any) => {
    return (
        <React.Fragment>
            {body.map((post: any) => {
                const { _id, title, content } = post;
                const colorArray = ['primary', 'secondary', 'success', 'warning', 'info', 'light', 'dark', '',  'secondary', 'success', 'warning']
                const colorPicker = Math.floor(Math.random() * 10);
                return (
                    <div key={_id}>

                        <ListGroup>

                            <ListGroup.Item action variant={colorArray[colorPicker]}>
                                <h2>{title}</h2>
                                <p><i>{content}</i></p>

                            </ListGroup.Item>

                        </ListGroup>
                    </div>
                );
            })}
        </React.Fragment>
    );
};
export default Post;
