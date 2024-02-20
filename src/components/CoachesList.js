import React from 'react';
import styled from 'styled-components';

const CoachContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const CoachCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
`;

const CoachName = styled.h2`
  margin-bottom: 10px;
`;

const Specialization = styled.p`
  font-style: italic;
  margin-bottom: 10px;
`;

const Description = styled.p`
  margin-bottom: 10px;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
`;

const StarIcon = styled.span`
  color: gold;
`;

const CoachesList = () => {
  const coaches = [
    {
      id: 1,
      name: 'John Doe',
      specialization: 'Weight Loss',
      description: 'Certified nutritionist with 5 years of experience in helping clients achieve their weight loss goals.',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Jane Smith',
      specialization: 'Muscle Gain',
      description: 'Expert in muscle building diets and workout plans. Customized approach for each client.',
      rating: 4.8,
    },
    // Add more coaches as needed
  ];

  return (
    <div>
      <h1>Meet Our Coaches</h1>
      <CoachContainer>
        {coaches && coaches.map(coach => (
          <CoachCard key={coach.id}>
            <CoachName>{coach.name}</CoachName>
            <Specialization>{coach.specialization}</Specialization>
            <Description>{coach.description}</Description>
            <Rating>
              <StarIcon>★</StarIcon> {coach.rating} (Rating)
            </Rating>
            {/* Add buttons or links for actions like 'View Profile', 'Book Session', etc. */}
          </CoachCard>
        ))}
      </CoachContainer>
    </div>
  );
};

export default CoachesList;
