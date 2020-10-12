/**
 * Action types
 */
export enum CourseTypes {
  ADD_COURSE = '@course/ADD'
}

/**
 * Data types
 */
export interface Course {
  id: number
  title: string
}

/**
 * State type
 */
export interface CourseState {
  readonly data: Course[]
  readonly loading: boolean
  readonly error: boolean
}