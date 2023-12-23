// menu items
export interface PagePermission {
  [Page.Me]: boolean
  [Page.Responsibility]: boolean
  [Page.PersonalEvaluation]: boolean
  [Page.Company]: boolean
  [Page.EvaluationSchedule]: boolean
  [Page.SalaryManagement]: boolean
  [Page.Dashboard]: boolean
}

// menu items
export interface MenuItem {
  name: string
  text: string
  allowAccess: boolean
}

// Start Objective
export interface Objective {
  id: number
  title: string
  content: string
  supervisorResourceId?: number
  supervisorResource?: StaffResource
  selfResourceId?: number
  createdDatetime?: string
  updatedDatetime?: string
  isPreview?: boolean
}

// End Objective

// Ability Rating
export interface AbilityRating {
  id: number
  name: string
  definition: string
  selfAbilityRatingScaleId: number
  supervisorAbilityRatingScaleId: number
}

export interface RatingScale {
  id: number
  score: number
  definition: string
}

export interface AbilityCriteriaGroup {
  id: number
  name: number
}

export interface AbilityCriteriaGroupUsage {
  id: number
  departmentId: number
  abilityCriteriaGroupId: number
  fiscalTermId: number
}

// End Ability Rating

// Start Retrospective Log
export interface RetrospectiveLog {
  id: number
  title: string
  content: string
  isPublic: boolean
  createdDatetime: string
  updatedDatetime?: string
  selfResourceId?: number
  selfResource?: {
    id: number
    staffId: number
    name: string
  }
  supervisorResource: {
    id: number
    staffId: number
    name: string
  }
}
// End Retrospective Log

// Start Organization Staff
export interface Department {
  id: number
  name: string
}
export interface OrganizationStaff {
  staffId: number
  positionId: number
  departmentId: number
  employeeNumber: string
  branchId?: number
  name: string
  email: string
  departmentName: string
  position: string
}
// End staff

// Start StaffResource
export interface StaffResource {
  id: number
  staffId: number
  positionId?: number
  departmentId: number
  branchId?: number
  areaId?: number
  name: string
  email: string
  createdDatetime: string
  updatedDatetime?: string
  photoUrl?: string
}
// End StaffResource

// Start Evaluation sheet
export interface EvaluationSheet {
  id: number
  selfResourceId?: number
  supervisorStaffId?: number
  businessGoal: string
  reviewSummary: string
}
// End Evaluation sheet

export interface PerformanceSupervisorReview {
  id: number
  supervisorResourceId?: number
  selfResourceId?: number
  performanceCategoryId: number
  performanceCategory?: PerformanceCategory
  title: string
  content: string
  performanceType: PerformanceType
  supervisorResource?: StaffResource
  createdDatetime?: string
  updatedDatetime?: string
  isPreview?: boolean
}

export enum PerformanceType {
  strength = 1,
  weakness = 2,
}

export interface PerformanceCategory {
  id: number
  name: string
}

// Enum
export enum PermissionType {
  Denied = 'DENIED',
  Read = 'READ',
  Modify = 'MODIFY',
}

export enum EvaluationSheetResource {
  Salary = 'salary',
  BusinessGoal = 'businessGoal',
  Objective = 'objective',
  AbilityRating = 'abilityRating',
  RetrospectiveLog = 'retrospectiveLog',
  PerformanceSelfReview = 'performanceSelfReview',
  PerformanceSupervisorReview = 'performanceSupervisorReview',
  EvaluationStatus = 'evaluationStatus',
  PerformanceRate = 'performanceRate',
}

export enum NameUnit {
  Percent = 'percent',
  Yen = 'yen',
  Unit = 'unit',
  Contact = 'contact',
}
// Start Achievements table report

export interface AchievementMonthData {
  year: number
  month: number
  values: TemplateRowAchievementTable[]
}

export interface TemplateRowAchievementTable {
  formula: string
  label: string
  format: NameUnit
  value?: number
  order: number
}
// End Achievements table report

// Start Performance
export interface PerformanceSelfReview {
  id: number
  resourceId: number
  achievement: string
  selfResourceId: number
  strength: string
  weakness: string
  summary: string
  createdDatetime: string
  updatedDatetime: string
}

//start evaluation-sheet
export interface EvaluationsSheet {
  id: number
  staffId: number
  evaluationStatus: number
  name: string
  term: number
  halfTerm: number
  resourcePosition: string
  positionId: number
  resourceDepartment: string
  departmentId: number
  selfEvaluationOpenDate: string
  selfEvaluationDueDate: string
  selfEvaluationSubmitDate: string
  supervisorEvaluationDueDate: string
  supervisorEvaluationSubmitDate: string
}
//end evaluation-sheet

export interface YearMonth {
  year: number
  month: number
}

// User Information
export interface UserInfo {
  id: number
  staffId: number
  term?: number
  halfTerm?: number
  fiscalTermId?: number
  termLabel?: string
  email: string
  username: string
  usernameFurigana: string
  photoUrl?: string
  status: number
  branchId: number
  departmentName: string
  departmentId: number
  positions: TimelinePosition[]
  departments: { departmentId: number; departmentName: string }[]
  position: string
  positionId: number
  officeLocationId: number
  birthDate: string
  joiningDate: string
  officalEntryDate?: string
}
export interface Summary {
  head: string
  attributes: [
    {
      key: string
      value: number
    }
  ]
  isSummary: boolean
  weighted?: number | string
}

export interface ContainerAchievement {
  id: number
  label: string
  column1: string
  column2: string
  column3: string
  column4: string
  column5: string
  column6: string
  formula: string
  totalFirst: string //total value of 3 months on the left(sum)
  first: string //value of 3 months on the left after calculator
  second: string //value of 3 months on the left after calculator
  totalPeriod: string //value of follow period after calculator
}
// Supervisor information
export interface SupervisorInfo {
  selfEvaluationDueDate: string
  supervisorEvaluationDueDate: string
  selfEvaluationSubmitDate: string
  supervisorEvaluationSubmitDate: string
  supervisorsCanReview: [
    {
      order: number
      supervisors: [
        {
          staffId: number
          name: string
          email: string
          positionId: number
        }
      ]
    }
  ]
}

export enum HalfTerm {
  First = 1,
  Second = 2,
}

export interface FiscalTermInitialState {
  initFiscalTermDatetime?: string
  initStaffDatetime?: string
  initObjectiveDatetime?: string
  initAbilityCriteriaDatetime?: string
  initEvaluationScheduleDatetime?: string
  isPublicSalary?: boolean
}

export interface FiscalTerm {
  id: number
  term: number
  halfTerm: HalfTerm
  fromDate: string
  toDate: string
  label?: string
  initialState?: FiscalTermInitialState
}

export type SelectedFiscalTerm = Pick<FiscalTerm, 'term' | 'halfTerm'>

export interface TimelinePosition {
  positionId: number
  positionName: string
}

export interface HistoryUpdateEvaluationSchedule {
  updatedStaffId?: number
  updatedStaffName?: string
  updatedDatetime?: string
  updatedField?: string
}

export interface SettingStatusCompleteEvaluationSchedule {
  supervisorCanFinishEvaluation: boolean
}

export interface EvaluationSchedules {
  id: number
  fiscalTermId: number
  setting?: SettingStatusCompleteEvaluationSchedule
  history?: [HistoryUpdateEvaluationSchedule]
  selfEvaluationOpenDate?: string
  selfEvaluationDueDate?: string
  supervisorEvaluationDueDate?: string
}

export interface ProfitLossStatement {
  id: number
  resourceId: number
  link: string
  name?: string
  email?: string
  position?: string
  area?: string
}

export interface ProfitLossStatementResource {
  id: number
  name: string
  email: string
  position: string
  area: string
}

// Start salary
export interface SalaryManagementPermission {
  [PermissionType.Read]: boolean
  [PermissionType.Modify]: boolean
}

export interface Salary {
  id: number
  employeeNumber?: string
  resourceId: number
  overtimeHourPerMonth: number | null
  workingHourPerDay: number
  positionAllowance: number
  totalSalary: number
  level?: string
  overtimeSalary: number | null
  hourRate: number
  bonus: number
  incrementSalary: number | null
  baseSalary?: number
  isResponsibleStaff: boolean
  baseSalaryAndPositionAllowance?: number
  createdDatetime?: string
  updatedDatetime?: string | null
}

export type SalaryResource = Pick<
  StaffResource,
  'id' | 'name' | 'staffId' | 'positionId'
> & {
  positionName: string
  fiscalTermId: number
  staffPotential: Pick<StaffPotential, 'performanceRate'>
}

export interface SalaryTimeline extends Salary {
  createdStaffId: number | null
  resource: SalaryResource
}

export interface PersonalEvaluationSalary {
  currentFiscalTermSalary: SalaryTimeline
  nextFiscalTermSalary: SalaryTimeline
}

export type SalaryTimelineCreateInput = Pick<
  SalaryTimeline,
  | 'id'
  | 'resourceId'
  | 'overtimeHourPerMonth'
  | 'workingHourPerDay'
  | 'positionAllowance'
  | 'totalSalary'
  | 'bonus'
  | 'isResponsibleStaff'
  | 'level'
>

export type SalaryTimelineCreateInputFormatted = Pick<
  SalaryTimeline,
  | 'resourceId'
  | 'overtimeHourPerMonth'
  | 'workingHourPerDay'
  | 'positionAllowance'
  | 'totalSalary'
  | 'bonus'
  | 'overtimeSalary'
  | 'hourRate'
  | 'incrementSalary'
  | 'isResponsibleStaff'
  | 'level'
>
export interface SalarySettingConstant {
  annualDay: {
    value: number
    label: string
  }
  annualHoliday: {
    value: number
    label: string
  }
  annualWorking: {
    value: number
    label: string
  }
  workingHourPerDay: {
    value: number
    label: string
  }
  workingHourPerMonth: {
    value: number
    label: string
  }
  workingHourPerYear: {
    value: number
    label: string
  }
}

export interface SalarySetting extends SalarySettingConstant {
  id: number
  miniumHourRate: number
  createdResourceId: number
  createdResourceName: string
  createdDatetime: string
  updatedDatetime: string
}

export interface SalaryReviewSetting {
  isAllowInitSalaryReview: boolean
  isInProgressSalaryReview: boolean
}
// End Salary

// Start 9blocks
export type StaffPotential = {
  id: number
  resourceId: number
  performanceRate: number
  competency: number
  createdDatetime: string
  updatedDatetime: string
}
// End 9blocks

// Start Admin dashboard
export enum DashboardTab {
  InitNewFiscalTerm = 'init-new-fiscal-term',
  Permission = 'permission',
}

export interface SalaryReviewing {
  id: number
  name: string
  email: string
  departmentName: string
  positionName: string
  branchName: string
}

export interface SalaryReviewer extends SalaryReviewing {
  permission: SalaryManagementPermission
}
