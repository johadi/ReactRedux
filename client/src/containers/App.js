import React from 'react';
import {connect} from 'react-redux';
import '../../build/css/styles.css';
import {User} from '../components/User';
import {Main} from '../components/Main';
import {} from '../actions/mathsAction';
import {setName,setAge} from '../actions/userAction';

class App extends React.Component{
    constructor(props){
        super(props);
    }

    changeUsername=(newName)=>{
        this.props.setName(newName);
    }

    render(){
        return (
            <div>
                <Main changeUsername={this.changeUsername}/>
                <User username={this.props.user.name} />
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
            dispatch(setName(name))
        },
        setAge: (age)=>{
            dispatch(setAge(age));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);