export interface IResponse {
  status: number
  message: string
  success: boolean
  data?: any
}

export interface User {
  _id?: string
  username: string
  password: string
  permission: string
  accountNumber?: string
  accountName?: string
  bankcode?: string
  createdAt?: string
}

export interface IUserResponse extends IResponse {
  data: User
}

export interface IPaginationUser {
  totalRecords: number
  totalPages: number
  users: User[]
}

export interface IUsersResponse extends IResponse {
  data: IPaginationUser
}

export interface Game {
  _id?: string
  gameType: string
  content: string
  betName: string
  name?: string
  numberTLS: number[]
  amount: number
  resultType: string
  createdAt?: Date
  updatedAt?: Date
}

export interface IListGame {
  _id?: string
  games: Game[]
}

export interface IListGameDetail {
  _id?: string
  name: string
  gameType: string
  status: boolean
}

export interface GameResponse extends IResponse {
  data: Game[]
}

export interface IPlayer {
  _id?: string
  amount?: number
  bankcode: string
  accountNumber: string
  accountName: string
  username: string
  createdAt?: string
}

export interface PlayerResponse extends IResponse {
  data: IPlayer[]
}

export interface UserResponse extends IResponse {
  data: IPlayer
}

export interface IBankAdmin {
  _id?: string
  accountNumber: string
  qr?: string
  binBank: string
  name: string
  status: boolean
  active: boolean
  timeMaintain?: string
}

export interface BankAdminResponse extends IResponse {
  data: IBankAdmin[]
}

export interface ITransaction {
  content: string
  amount: number
  bank_type: string
}

export interface ITransactionHistory {
  _id?: string
  transId: string
  accountNumberClient: string
  bankClient: string
  accountNumberAdmin: string
  bankAdmin: string
  amount: number
  bonus: number
  betValue: string
  betName: string
  gameName: string
  detailGameName: string
  content: string
  status: string
  time: string
  createdAt: string
  updatedAt: string
  nickname: string
  code: string
  paymentStatus: boolean
  bankGet: string
}

export interface ICashHistory {
  _id?: string
  depositId: string
  accountNumberClient: string
  bankClient: string
  amount: number
  bonus: number
  betValue: string
  gameName: string
  detailGameName: string
  content: string
  status: string
  time: string
  nickName: string
  createdAt: string
  updatedAt: string
  nickname: string
}

export interface ITransactionHistoryResponse extends IResponse {
  data?: ITransactionHistory[]
}

export interface ITransactionHistoryPagination extends IResponse {
  totalRecords: number
  totalPages: number
  transactions: ITransactionHistory[]
}

export interface TransactionHistoryResponse extends IResponse {
  data: ITransactionHistoryPagination
}

export interface ICashHistoryPagination extends IResponse {
  totalRecords: number
  totalPages: number
  transactions: ICashHistory[]
}

export interface CashHistoryResponse extends IResponse {
  data: ICashHistoryPagination
}

export interface IMaintain {
  _id?: string
  start: string
  end: string
  content: string
  status: boolean
}

export interface MaintainResponse extends IResponse {
  data: IMaintain[]
}

interface Bank {
  name: string
  code: string
  bin: string
  shortName: string
  logo: string | null
  transferSupported: number
  lookupSupported: number
  short_name: string
  support: number
  isTransfer: number
  swift_code: string | null
}

export interface Task {
  code: string
}

export interface TaskResponse extends IResponse {
  data: Task
}

export interface Statistical {
  time: string
  amount: number
  bonus: number
}

export interface StatisticalResponse extends IResponse {
  data: Statistical[]
}

export interface Ctv {
  _id: string
  amountSum: number
  bonusSum: number
  count: number
  countIntro: number
  totalMoneyIntro: number
  totalMoneyIntroNotPaymnent: number
  accountName: string
  accountNumber: string
}

export interface CtvResponse extends IResponse {
  data: Ctv[]
}
