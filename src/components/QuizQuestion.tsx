import { Container, Text, Box } from "@chakra-ui/react"

import React from 'react'
import { useQuiz } from "../context/quiz-context"
import { Question } from "../quiz.types"

const QuizQuestion = ({ question }: { question: Question }) => {

    const { state, dispatch } = useQuiz()

    return (
        <Container>
            <Text>{state.currentQuestionNumber + 1}/{state.selectedQuiz?.questions.length}</Text>
            <Text>{question.question}</Text>
            {question.options.map((option) => { return <Text>{option.text}</Text> })}
            <Box as="button" borderRadius="md" bg="dodgerblue" color="white" px={4} h={8}
                onClick={() => dispatch({ type: "INCREMENT_QUESTION_NUMBER" })}
            >
                Next
            </Box>
        </Container>
    )
}

export default QuizQuestion
