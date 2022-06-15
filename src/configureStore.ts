import { applyMiddleware, createStore } from 'redux'

import { History } from 'history'

import { rootReducer } from './rootReducer'
import thunk from 'redux-thunk'

export const configureStore = (history: History) => {
  const store = createStore(
    rootReducer(history),
    window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk))
  )

  return store
}
