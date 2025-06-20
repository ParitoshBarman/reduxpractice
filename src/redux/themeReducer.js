function themeReducer(state='dark', action){
    switch(action.type){
        case 'DARK':
            return 'dark';
        case 'LIGHT':
            return 'light';
        case 'CUSTOM':
            return action.payload;
        default:
            return state;
    }
}


export default themeReducer;