import { Question } from "@prisma/client";
import * as questionRepository from "../repositories/questionRepository.js";

export type CreateQuestionData = Omit<Question, "id">

export async function create(question: CreateQuestionData) {
    await questionRepository.insert(question);
}

export async function get() {
    const questions = await questionRepository.get();
    return questions;
}

export async function getDetails(id: number) {
    const question = await questionRepository.getDetails(id);
    return question;
}

const questionService = {
    create,
    get,
    getDetails
};

export default questionService;