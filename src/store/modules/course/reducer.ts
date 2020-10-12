const INITIAL_STATE = {
    data: [
        'React.js',
        'React Native'
    ],
}

function courses(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ADD_COURSE':
            return {...state, data: [...state.data, action.payload.title]};
        default:
        return state;
    }
}

export default courses