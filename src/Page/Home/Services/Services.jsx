import React from 'react';
import useCoach from '../../../hook/useCoach';
import Service from './Service/Service';

const Services = () => {
    const [courses] = useCoach()
    // console.log(courses)
    return (
        <div>
            <h2>Our Services</h2>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4'>
                {
                    courses.map((course) =><Service key={course.id} course={course}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;