import {createAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import {UserModel} from 'src/models'
import {Path, removeToken, request} from 'src/utils'

const namespace = 'user'

type UserStoreState = {
  loading: boolean
  loaded: boolean
  user?: UserModel
  error?: string
}

const initState: UserStoreState = {
  loading: false,
  loaded: false
}

export const userSignOutAction = createAction(`${namespace}/sign-out`)

export const userMeAction = createAsyncThunk(`${namespace}/me`, async () => {
  const res = await request<UserModel>('GET', Path.User.getMe, {})
  return {user: res}
})

export const {reducer} = createSlice({
  name: namespace,
  initialState: initState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(userMeAction.pending, (state) => {
        state.loading = true
        state.error = undefined
      })
      .addCase(userMeAction.fulfilled, (state, action) => {
        state.user = action.payload.user
        state.loaded = true
        state.loading = false
      })
      .addCase(userMeAction.rejected, (state) => {
        state.loaded = true
        state.loading = false
        state.error = ''
      })
      .addCase(userSignOutAction, (state) => {
        removeToken('accessToken')
        removeToken('refreshToken')
        state.user = undefined
        state.error = undefined
      })
})
