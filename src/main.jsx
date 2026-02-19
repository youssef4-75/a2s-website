import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'

import './index.css'
import MyProject from './pages/myProject'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/myProject" element={<MyProject />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
