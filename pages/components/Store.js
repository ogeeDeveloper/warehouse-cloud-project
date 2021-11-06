import { createContext, useReducer } from "react"

// Create a Context ad save result in Store
export const Store = createContext()

const reducer = (state, action) => {
  // reducer state will cange based om action
  switch (action.type) {
    default:
      return state // Return default state
  }
}

const initialState = {
  cart: { loading: true },
  order: null,
}
// Define store provider
export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }

  // Return te Store Provider
  return <Store.Provider value={value}>{props.children}</Store.Provider>
}
