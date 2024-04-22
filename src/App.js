import './App.css';
import * as React from "react";
import { HomePage } from './pages/Home'
import { LoginForm } from './pages/Login';
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

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dash />} />
      </Routes>
    </div>
  );
}