import axios from 'axios';

export const setName=(name)=>{
    return {type: 'SET_NAME',payload: new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(name),6000);
    }) };
}
export const setAge=(age)=>{
    return {type: 'SET_AGE',payload: age};
}
export const increaseAge=()=>{
    return (dispatch)=>{
        axios.get('/api/profile')
            .then(response=>{
                //console.log(data.age +" and "+typeof data.age);
                console.log(response.data);
                dispatch({type: 'INCREASE_AGE',payload: response.data.age})
            })
            .catch(err=>{
                console.log(err);
            })
    }
}
export const saveAge=(name,age)=>{
    return dispatch=>{
        axios.post('/api/profile', {name, age})
            .then(response => {
                console.log(response);
                dispatch({type: 'SAVE_AGE',payload: {name: response.data.name,age: response.data.age}});
            })
            .catch(error => {
                console.log(error);
            });
    }
}


// {type: 'INCREASE_AGE',payload: age};