import React, { useState } from 'react'
import {
    FormControl, FormLabel, Input, Button, Flex, Heading, Text
} from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/auth-context'
import { Link } from 'react-router-dom'


const Signup = () => {

    const { registerUser } = useAuth()
    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleClick = async (e: any) => {
        e.preventDefault()
        const res = await registerUser(username, email, password)
        console.log(res)
        if (res) {
            navigate("/")
        } else {
            setUsername("")
            setEmail("")
            setPassword("")
        }
    }

    return (
        <Flex height="80vh" alignItems="center" justifyContent="center">
            <Flex direction="column" background="gray.100" p={12} rounded={6}>
                <Heading mb={6}>Sign Up</Heading>

                <FormControl>
                    <FormLabel>Username</FormLabel>
                    <Input placeholder="Username" name="username" onChange={(e) => setUsername(e.target.value)} />

                    <FormLabel>Email address</FormLabel>
                    <Input type="email" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} />

                    <FormLabel>Password</FormLabel>
                    <Input placeholder="Password" type="password" name="password" onChange={(e) => setPassword(e.target.value)} />

                    <Button
                        mt={4}
                        color="white"
                        bg="gray.800"
                        type="submit"
                        onClick={handleClick}
                    >
                        Submit
                    </Button>

                </FormControl>
                <Flex>
                    <Text mt={5} fontSize={20} fontWeight={10}>Already have an account account?{"  "}
                        <Link to="/login" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                            Login
                        </Link>
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Signup