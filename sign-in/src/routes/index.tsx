import React from "react"
import { Home } from "../pages"
import SignInSide from "../pages/sign-in"
import CheckByPin from "../pages/check-by-pin"
import CheckByPlate from "../pages/check-by-plate"
import { InfoByPin } from "../pages/info-by-pin"

export interface IRoute {
    path: string
    page: any
    exact?: boolean
    id: number
}

export enum RouteNames {
    LOGIN = '/sign-in',
    HOME = '/',
    CHECK_BY_INN = '/check-by-pin',
    CHECK_BY_NUM = '/check-by-plate',
    INFO_BY_PIN = '/info-by-pin'
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, exact: true, id: 1, page: <SignInSide/>}
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.HOME, exact: true, id: 2, page: <Home/>},
    {path: RouteNames.CHECK_BY_INN, exact: true, id: 3, page: <CheckByPin/>},
    {path: RouteNames.CHECK_BY_NUM, exact: true, id: 4, page: <CheckByPlate/>},
    {path: RouteNames.INFO_BY_PIN, exact: true, id: 5, page: <InfoByPin/>}
]