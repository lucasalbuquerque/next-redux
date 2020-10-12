import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as CourseActions from '../../store/modules/course/actions';

const CourseList: React.FC = () => {
  const courses = useSelector(state => state.courses);
  const dispatch = useDispatch();

  function addCourse(){
      dispatch(CourseActions.add(`Framework ${Math.random()}`));
  }

  useEffect(() => {
    console.log("oi", courses)
  }, [])

  return (
      <>
      <ul>
         {courses.data.map(course => <li key={course}>{course}</li>)}
      </ul>
      <button type="button" onClick={addCourse}>add course</button>
      </>
  );
}

export default CourseList;