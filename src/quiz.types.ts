
export type Option = {
    id: string,
    text: string;
    isRight: boolean;
};

export type Question = {
    id: string,
    question: string;
    points: number;
    options: Option[];
};

export type Quiz = {
    quizId: string,
    quizName: string;
    playTime: string;
    cover: string;
    questions: Question[];
};

export type QuizList = {
    quizList: Quiz[]
}
