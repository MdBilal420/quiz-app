import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ path, ...props }: any) => {
    const data = localStorage?.getItem("token")
    let isUser = false;
    if (data) {
        isUser = true
    }
    return isUser ? (
        <Route {...props} path={path} />
    ) : (
        <Navigate replace to="/login" />
    );
}

export default PrivateRoute