import { useState } from 'react'
import {
    FormControl, FormLabel, Input, Button, Flex, Heading, Text, Alert, AlertIcon, AlertTitle, CloseButton
} from "@chakra-ui/react"
import { useAuth } from '../context/auth-context';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { authState, loginUser } = useAuth()
    const navigate = useNavigate()

    const login = async (e: any) => {
        e.preventDefault()
        const res = await loginUser(email, password)
        console.log(res)
        if (res.success)
            navigate("/")
        else {
            authState.error = ""
        }
    }


    return (
        <Flex height="80vh" alignItems="center" justifyContent="center" >
            <Flex direction="column" background="gray.100" p={12} rounded={6}>
                <Heading mb={6}>Login</Heading>
                <FormControl>
                    {authState.error && <Alert status="error">
                        <AlertIcon />
                        <AlertTitle mr={2}>Invalid Credentials</AlertTitle>
                        <CloseButton onClick={() => navigate('/login')} position="absolute" right="8px" top="8px" />
                    </Alert>}
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" placeholder="Email"
                        name="email"
                        mb={3}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <FormLabel>Password</FormLabel>
                    <Input placeholder="Password" type="password"
                        name="password"
                        mb={3}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        mt={4}
                        bg="gray.800"
                        color="white"
                        type="submit"
                        onClick={login}
                    >
                        Submit
                    </Button>
                </FormControl>
                <Text mt={5} fontSize={20} fontWeight={10}>Create a new account?{"  "}
                    <Link to="/signup" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                        Signup
                    </Link>
                </Text>
            </Flex>
        </Flex >
    )
}

export default Login