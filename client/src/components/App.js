import React from 'react';
import '../../build/css/styles.css';
import {User} from './User';
import {Main} from './Main';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={username: 'Hadi'}
    }

    changeUsername=(newName)=>{
        this.setState({username: newName});
    }

    render(){
        return (
            <div>
                <Main changeUsername={this.changeUsername}/>
                <User username={this.state.username} />
            </div>
        )
    }
}