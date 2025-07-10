export interface IWhenBlockText {
  question: string;
  imgUrl: string;
  answers: IAnswer[];
}

export interface IAnswer {
  answer: string;
  answerDescription: string;
}
