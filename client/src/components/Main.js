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
                        Change Username
                    </button> |
                    <button class="btn btn-primary" onClick={()=>props.changeAge(23)}>
                        Change Age
                    </button> |
                    <button class="btn btn-primary" onClick={()=>props.increaseAge()}>
                        Increase Age
                    </button> |
                    <button class="btn btn-success" onClick={()=>props.saveAge('jimoh',56)}>
                        Save Age
                    </button>
                </div>
            </div>
        </div>
    );
}