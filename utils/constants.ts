import { POSITION_IDS } from '@/types/constants'

export const EvaluationStatus = {
  setting: {
    key: 1,
    text: '目標設定',
  },
  evaluating: {
    key: 2,
    text: '評価期間中',
  },
  selfEvaluating: {
    key: 3,
    text: '自己評価',
  },
  supervisorEvaluating: {
    key: 4,
    text: '評価中',
  },
  complete: {
    key: 5,
    text: '評価完了',
  },
  finish: {
    key: 6,
    text: '完了',
  },
}

export const OFFICE = {
  headOffice: { id: 1, name: '本社' },
  yokohama: { id: 2, name: '横浜' },
  fukuoka: { id: 3, name: '福岡' },
  osaka: { id: 4, name: '大阪' },
  nagoya: { id: 5, name: '名古屋' },
  sapporo: { id: 6, name: '札幌' },
  nakano: { id: 7, name: '中野' },
  vietnam: { id: 8, name: 'ベトナム' },
}

export const FINANCIAL_TERM_CONFIG = {
  startYear: 2009,
  startTermMonth: 10,
}

export const HALF_TERM_CONFIG = {
  halfFirst: {
    value: 1,
    text: '上期',
    months: [10, 11, 12, 1, 2, 3],
  },
  halfSecond: {
    value: 2,
    text: '下期',
    months: [4, 5, 6, 7, 8, 9],
  },
}

export const ADMIN_EMAILS = [
  'sugata@azoom.jp',
  'takahashi@azoom.jp',
  'suzuki@azoom.jp',
  'baba@azoom.jp',
  'morita@azoom.jp',
]

export const INITIATION_RETRY_OPTIONS = {
  limit: 5,
  statusCodes: [404],
  backoffLimit: 3000,
}

export enum Page {
  Me = 'me',
  Responsibility = 'responsibility',
  Company = 'company',
  PersonalEvaluation = 'personal-evaluation',
  EvaluationSchedule = 'evaluation-schedule',
  SalaryManagement = 'salary-management',
  Dashboard = 'dashboard',
}

export const PAGE_ITEMS = [
  {
    name: Page.Me,
    path: '/evaluation-sheets/me',
    label: 'あなたの評価シート',
  },
  {
    name: Page.Responsibility,
    path: '/evaluation-sheets/responsibility',
    label: '担当評価シート',
  },
  {
    name: Page.Company,
    path: '/evaluation-sheets/company',
    label: '評価シート検索',
  },
  {
    name: Page.EvaluationSchedule,
    path: '/evaluation-schedule',
    label: '評価設定',
  },
  {
    name: Page.SalaryManagement,
    path: '/salary-management',
    label: '給料管理',
  },
  {
    name: Page.Dashboard,
    path: '/dashboard',
    label: 'ダッシュボード',
  },
]

export const WORKING_DAY_PER_MONTH = 20

export const OVERTIME_HOUR_PER_MONTH_DEFAULT = 45
export const OVERTIME_HOUR_PER_MONTH_RESPONSIBLE_STAFF = 80
export const OVERTIME_SALARY_RATE = 1.25

export const HARDCODE_ADMIN_IMPORT_SALARY_EMAILS = [
  'suzuki@azoom.jp',
  'morita@azoom.jp',
]

export const HARDCODE_STAFF_PERFORMANCE_RATE = ['toyokawa@azoom.jp']

export const SALARY_LEVEL_OPTIONS = {
  [POSITION_IDS.member]: ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8'],
  [POSITION_IDS.subManager]: ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8'],
  [POSITION_IDS.manager]: ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'],
  [POSITION_IDS.areaManager]: ['d1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8'],
  [POSITION_IDS.departmentManager]: [
    'e1',
    'e2',
    'e3',
    'e4',
    'e5',
    'e6',
    'e7',
    'e8',
  ],
  [POSITION_IDS.shareholder]: ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8'],
}

export const getSalaryLevelOptions = () => {
  return Object.values(SALARY_LEVEL_OPTIONS)
    .reduce((acc, cur) => {
      return [...acc, ...cur]
    }, [])
    .sort()
}
