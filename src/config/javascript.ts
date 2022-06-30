import { v4 as uuidv4 } from "uuid";

export interface IQuestions {
    name: string;
    answer: string;
    id: string;
}

export const javascript_questions = [
    {
        name: "Типы данных в JavaScript?",
        answer: "string boolean",
        id: uuidv4(),
    },
    {
        name: "Что такое Strict mode в JavaScript? ",
        answer: "Strict mode",
        id: uuidv4(),
    },
];
