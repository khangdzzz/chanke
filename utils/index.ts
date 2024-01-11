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
  name?: string;
  numberTLS: number[];
  amount: number;
  resultType: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IListGame {
  _id?: string;
  games: Game[];
}


export interface IListGameDetail {
  _id?: string;
  name: string;
  gameType: string;
  status: boolean;
}


export interface GameResponse extends IResponse {
  data: Game[];
}

export interface IPlayer {
  amount?: number
  bankcode: string
  accountNumber: string
  userid: string
  createdAt?: string
}

export interface PlayerResponse extends IResponse {
  data: IPlayer[]
}

export interface IBankAdmin {
  accountNumber: string
  qr?: string
  binBank: string
  name: string
  status: boolean
  active: boolean
}

export interface BankAdminResponse extends IResponse {
  data: IBankAdmin[]
}


export interface ITransaction {
  content: string;
  accountNumberClient: string;
  bankClient: string;
  accountNumberAdmin: string;
  bankAdmin: string;
  money: number;
  transactionId: string;
  transactionDetail: string;
  time: string;
}

export interface ITransactionHistory {
  _id?: string;
  transId: string;
  accountNumberClient: string;
  bankClient: string;
  accountNumberAdmin: string;
  bankAdmin: string;
  amount: number;
  bonus: number;
  betValue: string;
  betName: string;
  gameName: string;
  content: string;
  status: string;
  time: string;
  createdAt: string;
  updatedAt: string;
  nickname: string;
}

export interface TransactionHistoryResponse extends IResponse {
  data: ITransactionHistory[]
}


interface Bank {
  name: string;
  code: string;
  bin: string;
  shortName: string;
  logo: string | null;
  transferSupported: number;
  lookupSupported: number;
  short_name: string;
  support: number;
  isTransfer: number;
  swift_code: string | null;
}
