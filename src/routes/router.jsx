import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import A2SWebsite from '../App';
import EventsPage from '../pages/EventsPage';
import ContactPage from '../pages/ContactPage';
import ProjectsPage from '../pages/ProjectsPage';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Parent Route */}
        <Route path="/" element={<Layout />}>
          
          {/* Index Route */}
          <Route index element={<A2SWebsite />} />
          
          {/* Events Route */}
          <Route path="events" element={<EventsPage />} />
          
          {/* Contact Route */}
          <Route path="contact" element={<ContactPage />} />

          {/* Projects Route */}
          <Route path="projects" element={<ProjectsPage />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}