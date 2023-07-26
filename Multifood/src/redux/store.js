import {createStore,} from  'redux'
import reduces from './reduces'
export const store = createStore(reduces)