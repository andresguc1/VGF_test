import { render, screen } from '@testing-library/react';
import App from './App';

// Mock the child components
jest.mock('./components/LoginForm', () => () => <div>Login Form</div>);
jest.mock('./components/RegisterForm', () => () => <div>Register Form</div>);
jest.mock('./components/UserPanel', () => () => <div>User Panel</div>);

test('renders title of formulary', () => {
  render(<App />);
  const linkElement = screen.getByText(/Proyecto Web Básico/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the Login form', () => {
  render(<App />);
  expect(screen.getByText('Login Form')).toBeInTheDocument();
});



