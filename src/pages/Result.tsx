import { Container, Heading, Box, Center, Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/auth-context"
import { useQuiz } from "../context/quiz-context"

const Result = () => {
    const { state, dispatch } = useQuiz()
    const { authState } = useAuth()
    const navigate = useNavigate()

    const reset = () => {
        dispatch({ type: "RESET" })
        navigate("/")
    }

    return (
        <Container bg="gray.300" marginTop="15" padding="10" borderRadius="15">

            <Center><Heading as="h2">Thanks for Playing, {authState.user ? authState.user.username : "Guest"}</Heading></Center>

            <Box
                p="30px"
                color="white"
                mt="4"
                bg="gray.800"
                rounded="md"
                shadow="md"
            >
                <Heading> Final Score: {state.score}</Heading>
            </Box>
            <Box
                p="30px"
                color="white"
                mt="4"
                bg="teal.500"
                rounded="md"
                shadow="md"
            >
                <Heading>Correct: {state.correct}</Heading>
            </Box>
            <Box
                p="30px"
                color="white"
                mt="4"
                bg="red.500"
                rounded="md"
                shadow="md"
            >
                <Heading>Incorrect: {state.inCorrect}</Heading>
            </Box>


            <Button onClick={reset} mt={6} bg="gray.800" color="white">Try Again</Button>
        </Container>
    )
}

export default Result
