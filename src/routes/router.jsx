import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import ScrollToTop from '../components/ScrollToTop';
import EventsPage from '../pages/EventsPage';
import ContactPage from '../pages/ContactPage';
import ProjectsPage from '../pages/ProjectsPage';
import HomePage from '../pages/HomePage';
import Registration from '../pages/JoinUs';
import NotFoundPage from '../pages/NotFoundPage';
import ServiceDetailPage from '../pages/ServiceDetailPage';
import TeamPage from '../pages/TeamPage';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Parent Route */}
        <Route path="/" element={<Layout />}>
          
          {/* Index Route now points to HomePage */}
          <Route index element={<HomePage />} />
          
          {/* Other Routes */}
          <Route path="home" element={<HomePage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="services/:serviceId" element={<ServiceDetailPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="join-us" element={<Registration />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="*" element={<NotFoundPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}