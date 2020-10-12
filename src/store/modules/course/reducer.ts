import { Reducer } from 'redux';
import { CourseState, CourseTypes } from './types';

const INITIAL_STATE: CourseState = {
    data: [
        { id: 0, title: 'React.js'},
        { id: 1, title: 'React native'}
    ],
    loading: false,
    error: false
}

const reducer: Reducer<CourseState> = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CourseTypes.ADD_COURSE:
            return {...state, data: [...state.data, action.payload.data]};
        default:
        return state;
    }
}

export default reducer;