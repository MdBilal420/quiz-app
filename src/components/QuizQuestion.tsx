import { Container, Text, Box, Center } from "@chakra-ui/react"


import React, { useState } from 'react'
import { useNavigate } from "react-router"
import { useAuth } from "../context/auth-context"
import { useQuiz } from "../context/quiz-context"
import { Option, Question } from "../quiz.types"

const QuizQuestion = ({ question }: { question: Question }) => {

    const { state, dispatch } = useQuiz()
    const { authState, saveScore } = useAuth()
    const [selectedOption, setSelectedOption] = useState<Option | null>(null)
    const navigate = useNavigate()


    const selectOption = (option: Option) => {
        if (option.isRight) {
            dispatch({ type: "UPDATE_SCORE", payload: 10 })
            dispatch({ type: "UPDATE_CORRECT" })
        } else {
            dispatch({ type: "UPDATE_SCORE", payload: -5 })
            dispatch({ type: "UPDATE_INCORRECT" })
        }
        setSelectedOption(option)
    }

    const nextQuestion = () => {
        dispatch({ type: "INCREMENT_QUESTION_NUMBER" })
        setSelectedOption(null)
    }

    const styleOptions = (option: Option) => {
        console.log(selectedOption)
        if (selectedOption) {
            if (option.isRight && option.id === selectedOption.id) {
                return "#38A169"
            }
            if (!option.isRight && option.id === selectedOption.id) {
                return "#E53E3E"
            }
            if (option.isRight && option.id !== selectedOption.id) {
                return "#38A169"
            }
        }
        return ""
    }

    const submitQuiz = async () => {
        await saveScore(authState.user?.username, state.selectedQuiz?.quizName, state.score)
        navigate("/result")
    }

    return (
        <Container marginTop="10" padding="10" borderRadius="15">
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <Text as="mark">{state.currentQuestionNumber + 1}/{state.selectedQuiz?.questions.length}</Text>
                <Text>Score: {state.score}</Text>
            </div>
            <Center bg="#2D3748" h="100px" color="white" borderRadius="10px" padding="5">
                {question.question}
            </Center>
            {question.options.map((option) => {
                return <Center
                    key={option.id}
                    cursor="pointer"
                    bg={styleOptions(option) ? styleOptions(option) : "#718096"}
                    h="50px"
                    color="black"
                    borderRadius="7px"
                    marginTop="5"
                    onClick={() => selectOption(option)}
                >
                    {option.text}
                </Center>
            })
            }

            {state.currentQuestionNumber + 1 === state.selectedQuiz?.questions.length
                ?
                <Box as="button" borderRadius="md" bg="teal" color="white" px={7} h={14} marginTop="5"
                    onClick={submitQuiz}
                >
                    Submit
                </Box>
                :
                <Box as="button" borderRadius="md" bg="dodgerblue" color="white" px={7} h={14} marginTop="5"
                    onClick={nextQuestion}
                >
                    Next
                </Box>
            }
        </Container>
    )
}

export default QuizQuestion
