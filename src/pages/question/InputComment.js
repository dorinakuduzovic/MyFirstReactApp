import React, { Component } from 'react';
import { MDBInput } from "mdbreact";

const InputComment = () => {
    return (
        <div className="col-lg-7 col-md-8 col-10 mx-auto">
            <MDBInput
                type="textarea"
                label="Write your Answer"
                rows="2"
                icon="comment"
            />
        </div>
    )
}
export default InputComment;