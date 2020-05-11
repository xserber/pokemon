export default function createReducer(initialState: object, reducerMap: any) {
  return (state = initialState, action: { type: string; payload: any }) => {
    const reducer = reducerMap[action.type]

    return reducer ? reducer(state, action.payload) : state
  }
}
