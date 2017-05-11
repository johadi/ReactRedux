import React from 'react';
export const Main =(props)=>{
    return (
        <div>
            <div class="row">
                <div class="col-lg-12">
                    <h1>Main Page</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <button class="btn btn-success" onClick={()=>props.changeUsername('Ovansa')}>
                        Change Username</button>
                </div>
            </div>
        </div>
    );
}