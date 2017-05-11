import React from 'react';
export class Main extends React.Component{
    render(){
        return (
            <div>
                <div class="row">
                    <div class="col-lg-12">
                        <h1>Main Page</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <button class="btn btn-success" onClick={()=>this.props.changeUsername('jimoh')}>
                            Change Username</button>
                    </div>
                </div>
            </div>
        )
    }
}