import './App.css';
import * as React from "react";
import { HomePage } from './pages/Home'
import { LoginForm } from './pages/Login';
import { ContactsPage } from './pages/Contacts';
import { ContactDetailsPage } from './components/pages/ContactPage';
import { TicketDetailsPage } from './components/pages/TicketDetails';
import {
  Routes,
  Route
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import { TicketsPage } from './pages/Tickets';
import { AccountsPage } from './pages/Accounts';
import { DealsKanban } from './pages/DealsKanban';


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

const Tickets = () => {
  return (
    <TicketsPage />
  )
}

const Deals = () => {
  return (
    <DealsKanban />
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
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/tickets/:id" element={<TicketDetailsPage />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/accounts" element={<AccountsPage />} />
      </Routes>
    </div>
  );
}