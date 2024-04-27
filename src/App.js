import './App.css';
import * as React from "react";
import { HomePage } from './pages/Home'
import { LoginForm } from './pages/Login';
import { ContactsPage } from './pages/Contacts';
import { ContactDetailsPage } from './components/pages/ContactPage';
import {
  Routes,
  Route
} from "react-router-dom";
import Dashboard from './pages/Dashboard';


const Home = () => {
  return (
    <HomePage />
  )
};

const Login = () => {
  return (
    <LoginForm />
  )
}

const Dash = () => {
  return (
    <Dashboard />
  )
}

const Contact = () => {
  return (
    <ContactsPage />
  )
}

const ContactPage = () => {
  return (
    <ContactDetailsPage />
  )
}

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dash />} />
        <Route path='/contacts' element={<Contact />} />
        <Route path="/contacts/:id" element={<ContactPage />} />
      </Routes>
    </div>
  );
}