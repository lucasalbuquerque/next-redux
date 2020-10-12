import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as CourseActions from '../../store/modules/course/actions';

import { Course } from '../../store/modules/course/types';

const CourseList: React.FC = () => {
  const courses = useSelector<Course[]>(state => state.courses);
  const dispatch = useDispatch();

  function addCourse(){
      dispatch(CourseActions.add({ id: Math.random(), title: `Framework ${Math.random()}`}));
  }

  useEffect(() => {
    console.log("oi", courses)
  }, [])

  return (
      <>
      <ul>
         {courses.data.map(course => <li key={course.id}>{course.title}</li>)}
      </ul>
      <button type="button" onClick={addCourse}>add course</button>
      </>
  );
}

export default CourseList;