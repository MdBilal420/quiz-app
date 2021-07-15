
import { AuthStateTypes, AuthAction } from './quiz-context.types';

const authReducer = (authState: AuthStateTypes, action: AuthAction): AuthStateTypes => {
    switch (action.type) {
        case "SIGNUP":
        case "LOGIN":
            localStorage.setItem('token', JSON.stringify({ token: action.payload.id }))
            return {
                ...authState,
                isAuth: true,
                user: action.payload.user,
                error: null
            }
        case "LOGOUT":
            localStorage.removeItem("token");
            return {
                ...authState,
                isAuth: false,
                user: null,
                error: null
            }

        case "AUTH_FAIL":
            return {
                ...authState,
                error: "Invalid Credentials"
            }

        default:
            return authState
    }
}

export default authReducer