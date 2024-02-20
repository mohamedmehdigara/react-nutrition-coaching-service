import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import UserDashboard from './components/UserDashboard';
import CoachesList from './components/CoachesList';
import CoachProfile from './components/CoachProfile';
import MealPlanning from './components/MealPlanning';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/dashboard" element={<UserDashboard/>} />
          <Route exact path="/coaches" element={<CoachesList/>} />
          <Route exact path="/coach/:id" element={<CoachProfile/>} />
          <Route exact path="/meal-planning" element={<MealPlanning/>} />
          {/* Add more routes for other components */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
