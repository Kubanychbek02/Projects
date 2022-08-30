import UserService from "../../../api/UserService";
import { AppDispatch } from "../../../app/store";
import { IUser } from "../../../models/IUser";
import { AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction } from "./types";

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: auth}),
    setError: (payload: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload}),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload}),

    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            setTimeout( async() => {
                const response = await UserService.getUsers()
                const mokUsers = response.data.find(user => user.username === username && user.password === password)
                
                if(mokUsers) {
                    localStorage.setItem('auth', 'true');
                    localStorage.setItem('username', mokUsers.username)
                    dispatch(AuthActionCreators.setUser(mokUsers))
                    dispatch(AuthActionCreators.setIsAuth(true))
                } else {
                    dispatch(AuthActionCreators.setError('Uncorrect login or password'))
                }
                dispatch(AuthActionCreators.setIsLoading(false))
            }, 2000);
        }
        catch (e) {
            dispatch(AuthActionCreators.setError('ERROR LOGIN'))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        localStorage.removeItem('auth')
        localStorage.removeItem('username')
        dispatch(AuthActionCreators.setUser({} as IUser))
        dispatch(AuthActionCreators.setIsAuth(false))
    }
}