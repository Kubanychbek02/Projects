import { PeopleOutline } from '@mui/icons-material'
import {
  AddEmploye,
  EmployesTable,
  HomePage,
  ProfilePage,
  SignInPage} from 'src/pages'

export interface RouteData {
  permissions: ReadonlyArray<Permissions>
  page: JSX.Element
  path: string
  title: string
  logo?: JSX.Element
  display: boolean
  child?: ReadonlyArray<RouteData>
  isChild?: boolean
}

export const ROUTES: ReadonlyArray<RouteData> = [
  {
    path: '',
    permissions: [],
    page: <HomePage />,
    title: '',
    display: false,
  },
  {
    path: '/auth/sign-in',
    permissions: [],
    page: <SignInPage />,
    title: '',
    display: false,
  },
  {
    path: '/profile',
    permissions: [],
    page: <ProfilePage />,
    title: '',
    display: false,
  },
  {
    title: 'Сотрудники',
    path: '/empolyes-tabel',
    permissions: [],
    logo: <PeopleOutline/>,
    page: <EmployesTable />,
    display: true,
  },
  {
    path: '/add-employe',
    permissions: [],
    page: <AddEmploye />,
    title: '',
    display: false,
  },
] as const
