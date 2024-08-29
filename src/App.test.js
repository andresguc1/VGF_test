import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Mock the child components
jest.mock('./components/LoginForm', () => () => <div>Login Form</div>);
jest.mock('./components/RegisterForm', () => () => <div>Register Form</div>);
jest.mock('./components/UserPanel', () => () => <div>User Panel</div>);

describe('Test Tittle ', () => {
  test('renders app title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Proyecto Web Básico/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders LoginForm by default', () => {
    render(<App />);
    expect(screen.getByText('Login Form')).toBeInTheDocument();
  });

  test('navigates to RegisterForm', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const registerLink = screen.getByText('Regístrate');
    fireEvent.click(registerLink);
    expect(screen.getByText('Register Form')).toBeInTheDocument();
  });
});