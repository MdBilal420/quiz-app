import { QuizList } from "../quiz.types";
import { v4 as uuidv4 } from 'uuid';

export const quizzes: QuizList = {
    quizList: [
        {
            quizId: uuidv4(),
            quizName: "Marvel Cinematic Universe",
            playTime: "3 minutes",
            cover: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            questions: [
                {
                    id: uuidv4(),
                    question:
                        "How many avengers were there in first Avengers movie released in 2012?",
                    points: 5,
                    options: [
                        {
                            id: uuidv4(),
                            text: "22",
                            isRight: false
                        },
                        {
                            id: uuidv4(),
                            text: "6",
                            isRight: true
                        }
                    ]
                },
                {
                    id: uuidv4(),
                    question:
                        "What was Dr. Strange doing during the fight of New York in 2012?",
                    points: 15,
                    options: [
                        {
                            id: uuidv4(),
                            text: "getting trained as master of the mystic arts",
                            isRight: false
                        },
                        {
                            id: uuidv4(),
                            text: "performing surgery as a real doctor",
                            isRight: true
                        }
                    ]
                },
                {
                    id: uuidv4(),
                    question: "who's the love interest for Wanda in MCU?",
                    points: 5,
                    options: [
                        {
                            id: uuidv4(),
                            text: "Clint",
                            isRight: false
                        },
                        {
                            id: uuidv4(),
                            text: "Vision",
                            isRight: true
                        }
                    ]
                }
            ]
        },

        {
            quizId: uuidv4(),
            quizName: "Sports",
            playTime: "3 minutes",
            cover: "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80",
            questions: [
                {
                    id: uuidv4(),
                    question: "Who is known as master-blaster?",
                    points: 5,
                    options: [
                        {
                            id: uuidv4(),
                            text: "Lara",
                            isRight: false
                        },
                        {
                            id: uuidv4(),
                            text: "Sachin",
                            isRight: true
                        },
                        {
                            id: uuidv4(),
                            text: "Ponting",
                            isRight: false
                        }
                    ]
                },
                {
                    id: uuidv4(),
                    question: "Which team won the FIFA World Cup 2018?",
                    points: 5,
                    options: [
                        {
                            id: uuidv4(),
                            text: "France",
                            isRight: true
                        },
                        {
                            id: uuidv4(),
                            text: "Brazil",
                            isRight: false
                        },
                        {
                            id: uuidv4(),
                            text: "Germany",
                            isRight: false
                        }
                    ]
                },
                {
                    id: uuidv4(),
                    question: "What is India's national sports?",
                    points: 15,
                    options: [
                        {
                            id: uuidv4(),
                            text: "Football",
                            isRight: false
                        },
                        {
                            id: uuidv4(),
                            text: "Cricket",
                            isRight: false
                        },
                        {
                            id: uuidv4(),
                            text: "Hockey",
                            isRight: true
                        }
                    ]
                }
            ]
        },

        {
            quizId: uuidv4(),
            quizName: "Entertainment",
            playTime: "3 minutes",
            cover: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=738&q=80",
            questions: [
                {
                    id: uuidv4(),
                    question: "Which film is rated the best film of all time in IMDB?",
                    points: 5,
                    options: [
                        {
                            id: uuidv4(),
                            text: "Titanic",
                            isRight: false
                        },
                        {
                            id: uuidv4(),
                            text: "The Shawshank Redemption",
                            isRight: true
                        },
                        {
                            id: uuidv4(),
                            text: "Gravity",
                            isRight: false
                        }
                    ]
                },
                {
                    id: uuidv4(),
                    question: "Which Indian musician have won the OSCAR ?",
                    points: 5,
                    options: [
                        {
                            id: uuidv4(),
                            text: "Pritam",
                            isRight: true
                        },
                        {
                            id: uuidv4(),
                            text: "Kishore Kumar",
                            isRight: false
                        },
                        {
                            id: uuidv4(),
                            text: "A.R. Rehman",
                            isRight: false
                        }
                    ]
                },
                {
                    id: uuidv4(),
                    question: "Who is the KING KHAN of Bollywood?",
                    points: 15,
                    options: [
                        {
                            id: uuidv4(),
                            text: "Shahrukh Khan",
                            isRight: false
                        },
                        {
                            id: uuidv4(),
                            text: "Aamir Khan",
                            isRight: false
                        },
                        {
                            id: uuidv4(),
                            text: "Salman Khan",
                            isRight: true
                        }
                    ]
                }
            ]
        }
    ]

}