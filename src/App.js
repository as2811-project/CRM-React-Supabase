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
  const contacts = [
    {
      id: 1,
      img_url:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "John Doe",
      email: "john@example.com",
    },
    {
      id: 2,
      img_url:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Jane Smith",
      email: "jane@example.com",
    },
    {
      id: 3,
      img_url:
        "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Alice Johnson",
      email: "alice@example.com",
    },
  ];
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dash />} />
        <Route path='/contacts' element={<Contact contacts={contacts} />}>
          <Route path=":id" element={ContactPage} />
        </Route>
      </Routes>
    </div>
  );
}