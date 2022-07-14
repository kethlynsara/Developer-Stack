import { prisma } from "../config/database.js";
import { CreateQuestionData } from "../services/questionService.js";

export async function insert(question: CreateQuestionData) {
    await prisma.question.create({data: question});
}

export async function get() {
    const questions = await prisma.question.findMany();
    return questions;
}

export async function getDetails(id: number) {
    const question = await prisma.question.findUnique({
        where: {
            id,
        },
        select: {
            question: true,
            Answer: {
                select: {
                    answer: true
                }
            }            
        }
    });
    return question;
}