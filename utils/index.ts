export interface IResponse {
  status: number
  message: string
  success: boolean
  data?: any
}

export interface Game {
  _id?: string;
  gameType: string;
  content: string;
  betName: string;
  numberTLS: number[];
  amount: number;
  resultType: string;
  createdAt: Date;
  updatedAt: Date;
}


export interface GameResponse extends IResponse {
  data: Game;
}
