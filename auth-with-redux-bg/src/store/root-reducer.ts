import {combineReducers} from '@reduxjs/toolkit'

import {reducer as userReducer} from './user'

// eslint-disable-next-line import/no-default-export
export default combineReducers({user: userReducer})
