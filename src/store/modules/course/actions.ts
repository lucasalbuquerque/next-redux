import { action } from 'typesafe-actions';

import { CourseTypes, Course } from './types';

  export const add = (data: Course) => action(CourseTypes.ADD_COURSE, { data });