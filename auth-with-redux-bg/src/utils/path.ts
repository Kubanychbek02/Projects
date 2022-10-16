import {API_URL} from './const'

const baseV1 = (url: string) => `${API_URL}/api/v1/${url}`

export class Path {
  static Auth = class {
    static signIn = baseV1('auth/login')
  }
  static User = class {
    static getMe = baseV1('accounts/me')
  }
  static ChangePassword = class {
    static change = baseV1('accounts/change-password')
  }
  static Employees = class {
    static add = baseV1('employees')
    static search = baseV1('employees/search')
  }
}
