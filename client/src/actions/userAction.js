export const setName=(name)=>{
    return {type: 'SET_NAME',payload: new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(name),6000);
    })

    };
}
export const setAge=(age)=>{
    return {type: 'SET_AGE',payload: age};
}
export const increaseAge=(newAge)=>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch({type: 'INCREASE_AGE',payload: newAge})
                .then(()=>console.log('Age increased'));
        },3000)
    }
}


// {type: 'INCREASE_AGE',payload: age};