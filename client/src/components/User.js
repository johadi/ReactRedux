import React from 'react';
export class User extends React.Component{
    render(){
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <h1>User Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <p>Username: {this.props.username}</p>
                    </div>
                </div>
            </div>
        )
    }
}