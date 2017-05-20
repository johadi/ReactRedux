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


// {type: 'INCREASE_AGE',payload: age};