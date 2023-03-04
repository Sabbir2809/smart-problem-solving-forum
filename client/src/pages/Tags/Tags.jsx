import React from 'react';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import TagsList from './TagsList';
import './Tags.css';

const Tags = () => {
  const tagsList = [
    {
      id: 1,
      tagName: 'cse',
      tagDescription: `The B.Sc. Program in Computer Science & Engineering (CSE) is designed to produce skilled graduates in the field to satisfy the growing demands of computer engineering graduates in the home and abroad. It provides the students an opportunity to obtain the broad knowledge of Computer Science, Computer Engineering with the freedom to tailor the program according to the student's individual needs.`,
    },
    {
      id: 2,
      tagName: 'swe',
      tagDescription: `The Department of Software Engineering is committed to satisfy the growing demands of software professionals throughout the country and to produce skilled manpower for the global IT Market. It provides the students an opportunity to obtain a broad knowledge of Software`,
    },
    {
      id: 3,
      tagName: 'eee',
      tagDescription: `The Department of  Electrical and Electronic Engineering offers programs which develop students  in such a way so that they  can solve the  design problems,  apply engineering skills, exhibit critical thinking in professional engineering practices or can tackle social, technical`,
    },
    {
      id: 4,
      tagName: 'cis',
      tagDescription: `The department of Computing and Information System (CIS)  since its inception has been continuously fostering academic excellence through industry academy collaboration especially integrating industry demands of ICT skills in the core curriculum of the CIS program.`,
    },
    {
      id: 5,
      tagName: 'mct',
      tagDescription: `In the Department of Multimedia and Creative Technology (MCT), we nurture both students, technical skills, and their creativity, allowing them to apply their imagination, their dreams, and their artistic talents in terms of state-of-art technology.`,
    },
    {
      id: 6,
      tagName: 'architecture',
      tagDescription: `The mission of the department is to develop the students to develop a career as Professional Architecture. The contents are selected to provide a harmonious blend of relevant basic courses, fundamentals of building technology,  and their applications as well as social,`,
    },
    {
      id: 7,
      tagName: 'civil',
      tagDescription: `The Department of Civil Engineering covers a broad range of disciplines related to structural, environmental, Geo-technics , transportation and water resources engineering. The syllabus involves public infrastructure, including transportation, water resources, buildings and other`,
    },
    {
      id: 8,
      tagName: 'ice',
      tagDescription: `The Department of Information and Communication Engineering (ICE) aims to impart and improve the theoretical knowledge and practical skills of students in Information and Communication Engineering.`,
    },
  ];

  return (
    <div className='home-container-1'>
      <LeftSidebar></LeftSidebar>
      <div className='home-container-2'>
        <h1 className='tags-h1'>Tags</h1>
        <p className='tags-p'>
          A tag is a keyword or label that categorizes you question with other, similar questions.
        </p>
        <p className='tags-p'>
          Using the right tags makes it easier for others to find and answer your question.
        </p>
        <div className='tags-list-container'>
          {tagsList.map((tag) => (
            <TagsList key={tag.id} tag={tag}></TagsList>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tags;
