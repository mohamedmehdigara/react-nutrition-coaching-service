import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const ProfileHeader = styled.div`
  text-align: center;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const ProfileName = styled.h2`
  margin-top: 10px;
`;

const ProfileDetails = styled.div`
  margin-top: 20px;
`;

const ProfileDescription = styled.p`
  margin-bottom: 20px;
`;

const Specialization = styled.p`
  font-style: italic;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const StarIcon = styled.span`
  color: gold;
`;

const CoachProfile = () => {
  // Static data for demonstration
  const coach = {
    name: 'John Doe',
    image: 'https://via.placeholder.com/150',
    specialization: 'Weight Loss',
    description: 'Certified nutritionist with 5 years of experience in helping clients achieve their weight loss goals. Skilled in developing personalized meal plans and providing ongoing support.',
    rating: 4.5,
    experience: '5 years',
    qualifications: ['Certified Nutritionist', 'Registered Dietitian'],
    // Add more profile details as needed
  };

  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileImage src={coach.image} alt={coach.name} />
        <ProfileName>{coach.name}</ProfileName>
        <Specialization>{coach.specialization}</Specialization>
        <Rating>
          <StarIcon>★</StarIcon> {coach.rating} (Rating)
        </Rating>
      </ProfileHeader>
      <ProfileDetails>
        <ProfileDescription>{coach.description}</ProfileDescription>
        <div>
          <h3>Experience:</h3>
          <p>{coach.experience}</p>
        </div>
        <div>
          <h3>Qualifications:</h3>
          <ul>
            {coach.qualifications.map((qualification, index) => (
              <li key={index}>{qualification}</li>
            ))}
          </ul>
        </div>
        {/* Add more profile details like areas of expertise, testimonials, etc. */}
      </ProfileDetails>
    </ProfileContainer>
  );
};

export default CoachProfile;
