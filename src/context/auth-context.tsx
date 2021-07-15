import { createContext, useContext } from "react";
import { AuthContextTypes } from './quiz-context.types';
import axios from "axios"
import { useReducer } from "react";
import authReducer from "./auth-reducer";

const AuthContext = createContext<AuthContextTypes>({} as AuthContextTypes)


export const initialValue: any = {
    user: null,
    isAuth: false,
    error: null
}


export const AuthProvider: React.FC = ({ children }) => {

    const [authState, authDispatch] = useReducer(authReducer, initialValue)


    // useEffect(() => {
    //     const user = localStorage?.getItem("token")
    //     if (user) {
    //         const token = JSON.parse(user);
    //         console.log(token)
    //         if(token){
    //             authDispatch({type:"LOGIN"})
    //         }
    //         // loginStatus.userID && setIsAuth(true);
    //     }
    // }, []);

    const registerUser = async (username: string, email: string, password: string) => {
        try {
            const res = await axios.post('https://queez-backend.mdbilal420.repl.co/signup', { username, email, password })
            console.log(res)
            if (res.status === 200) {
                authDispatch({ type: "SIGNUP", payload: res.data })
            }
            return { success: true, result: res.data }
        } catch (error) {
            authDispatch({ type: "AUTH_FAIL" })
            return { success: false }
        }
    }

    const loginUser = async (email: string, password: string) => {
        try {
            const res = await axios.post('https://queez-backend.mdbilal420.repl.co/login', { email, password });
            if (res.data.success) {
                authDispatch({ type: "LOGIN", payload: res.data })
            }

            return { success: true, result: res.data }
        } catch (error) {
            console.log(error);
            authDispatch({ type: "AUTH_FAIL" })
            return { success: false }
        }
    }

    const saveScore = async (username: string | undefined, genre: string | undefined, score: number | undefined) => {
        if (authState.user) {
            const res = await axios.post('https://queez-backend.mdbilal420.repl.co/score/addScore', {
                username, genre, score
            })
            console.log("result", res)
        }
    }

    const getAllScore = async () => {
        const res = await axios.get('https://queez-backend.mdbilal420.repl.co/score/getAllScores')
        console.log(res)
        return res.data
    }

    const LogOut = () => {
        authDispatch({ type: "LOGOUT" })
    }
    return (
        <AuthContext.Provider value={{
            authState,
            authDispatch,
            registerUser,
            loginUser,
            getAllScore,
            LogOut,
            saveScore
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
