import React from 'react';
import {connect} from 'react-redux';
import '../../build/css/styles.css';
import {User} from '../components/User';
import {Main} from '../components/Main';
import {} from '../actions/mathsAction';
import {setName,setAge,increaseAge} from '../actions/userAction';

class App extends React.Component{
    constructor(props){
        super(props);
    }

    changeUsername=(newName)=>{
        this.props.setName(newName);
    }
    changeAge=(newAge)=>{
        this.props.setAge(newAge);
    }
    increaseAge=(number)=>{
        this.props.increaseAge(number);
    }
    render(){
        return (
            <div>
                <Main increaseAge={this.increaseAge} changeAge={this.changeAge} changeUsername={this.changeUsername}/>
                <User age={this.props.user.age} username={this.props.user.name} />
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        user: state.user,
        maths: state.maths
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        setName: (name)=>{
            dispatch(setName(name));
        },
        setAge: (age)=>{
            dispatch(setAge(age));
        },
        increaseAge: (age)=>{
            dispatch(increaseAge(age));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);