import { QuizList } from "../quiz.types";

export const quizzes: QuizList = {
    quizList: [
        {
            quizId: "1",
            quizName: "Marvel Cinematic Universe",
            playTime: "5 minutes",
            cover: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            questions: [
                {
                    question:
                        "How many avengers were there in first Avengers movie released in 2012?",
                    points: 5,
                    options: [
                        {
                            text: "22",
                            isRight: false
                        },
                        {
                            text: "6",
                            isRight: true
                        }
                    ]
                },
                {
                    question:
                        "What was Dr. Strange doing during the fight of New York in 2012?",
                    points: 15,
                    options: [
                        {
                            text: "getting trained as master of the mystic arts",
                            isRight: false
                        },
                        {
                            text: "performing surgery as a real doctor",
                            isRight: true
                        }
                    ]
                },
                {
                    question: "who's the love interest for Wanda in MCU?",
                    points: 5,
                    options: [
                        {
                            text: "Clint",
                            isRight: false
                        },
                        {
                            text: "Vision",
                            isRight: true
                        }
                    ]
                }
            ]
        },

        {
            quizId: "2",
            quizName: "Sports",
            playTime: "5 minutes",
            cover: "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=748&q=80",
            questions: [
                {
                    question: "Who is master-blaster?",
                    points: 5,
                    options: [
                        {
                            text: "Lara",
                            isRight: false
                        },
                        {
                            text: "Sachin",
                            isRight: true
                        },
                        {
                            text: "Ponting",
                            isRight: false
                        }
                    ]
                },
                {
                    question: "Who is GOAT?",
                    points: 5,
                    options: [
                        {
                            text: "CR7",
                            isRight: true
                        },
                        {
                            text: "Messi",
                            isRight: false
                        },
                        {
                            text: "Neymar",
                            isRight: false
                        }
                    ]
                },
                {
                    question: "What is India's national sports?",
                    points: 15,
                    options: [
                        {
                            text: "Football",
                            isRight: false
                        },
                        {
                            text: "Cricket",
                            isRight: false
                        },
                        {
                            text: "Hockey",
                            isRight: true
                        }
                    ]
                }
            ]
        }
    ]

}