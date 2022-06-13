import { useEffect, useState } from "react";

const useCoach = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const url = `./../data.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return [courses, setCourses];
};

export default useCoach;
