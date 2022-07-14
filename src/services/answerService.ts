import { Answer } from "@prisma/client";
import * as answerRepository from "../repositories/answerRepository.js";

export type CreateAnswerData = Omit<Answer, "id">

export async function create(answer: CreateAnswerData) {
    await answerRepository.insert(answer);
}

const answerService = {
    create
};
export default answerService;