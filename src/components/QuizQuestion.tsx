import { Container, Text, Box, Center } from "@chakra-ui/react"

import React, { useState } from 'react'
import { useQuiz } from "../context/quiz-context"
import { Option, Question } from "../quiz.types"

const QuizQuestion = ({ question }: { question: Question }) => {

    const { state, dispatch } = useQuiz()
    const [selectedOption, setSelectedOption] = useState<Option | null>(null)


    const selectOption = (option: Option) => {
        if (option.isRight) {
            dispatch({ type: "UPDATE_SCORE", payload: 10 })
        } else {
            dispatch({ type: "UPDATE_SCORE", payload: -5 })
        }
        setSelectedOption(option)
    }

    const nextQuestion = () => {
        setSelectedOption(null)
        dispatch({ type: "INCREMENT_QUESTION_NUMBER" })
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
        }
        return ""
    }

    return (
        <Container marginTop="20">
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
                    bg={styleOptions(option) ? styleOptions(option) : "#4A5568"}
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
            <Box as="button" borderRadius="md" bg="dodgerblue" color="white" px={4} h={8} marginTop="5"
                onClick={nextQuestion}
            >
                Next
            </Box>
            {state.currentQuestionNumber + 1 === state.selectedQuiz?.questions.length
                &&
                <Box as="button" borderRadius="md" bg="dodgerblue" color="white" px={4} h={8} marginTop="5"
                    onClick={nextQuestion}
                >
                    Submit
            </Box>
            }
        </Container>
    )
}

export default QuizQuestion
