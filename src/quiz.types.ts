
export type Option = {
    text: string;
    isRight: boolean;
};

export type Question = {
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
