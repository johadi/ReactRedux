import React from 'react';
export const User=(props)=>{
    return (
        <div>
            <div className="row">
                <div className="col-lg-12">
                    <h1>User Page</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <p>Username: {props.username}</p>
                </div>
            </div>
        </div>
    )
}