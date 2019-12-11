export const initialState = [{
  item: 'Initial Item',
  completed: false,
  id: Date.now()
}]

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.payload
      ];
    case 'COMPLETED_TODO':
      return state.map((item) => {
        return item.id === action.payload ? {...item, completed: !item.completed} : item
      })
    default:
      return state;
  }
}