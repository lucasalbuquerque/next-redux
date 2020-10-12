export function add(title){
    return {
      type: 'ADD_COURSE',
      payload: {
        title
      },
    };
  }