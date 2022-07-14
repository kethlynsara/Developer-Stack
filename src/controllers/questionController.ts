import { Request, Response } from "express";
import answerService, { CreateAnswerData } from "../services/answerService.js";
import questionService, { CreateQuestionData }  from "../services/questionService.js";

export async function create(req: Request, res: Response) {
  const questionObj: CreateQuestionData = req.body;
  await questionService.create(questionObj);
  res.sendStatus(201);
}

export async function answer(req: Request, res: Response) {
  const { id } = req.params;
  const answerObj: CreateAnswerData = req.body;
  const { answer } = answerObj;

  await answerService.create({answer, questionId: parseInt(id)});
  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const questions = await questionService.get();
  res.send(questions);
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;
  const question = await questionService.getDetails(parseInt(id));
  res.send(question);
}
