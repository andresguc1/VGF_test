import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './UserContext';
import App from './App';

test('renders Proyecto Web Básico text', () => {
  render(
    <UserProvider>
      <Router>
        <App />
      </Router>
    </UserProvider>
  );
  const textElement = screen.getByText(/Proyecto Web Básico/i);
  expect(textElement).toBeInTheDocument();
});

test('renders login form on /login route', async () => {
  render(
    <UserProvider>
      <Router>
        <App />
      </Router>
    </UserProvider>
  );

  // Simulate navigation to /login
  window.history.pushState({}, 'Login Page', '/login');

  // Wait for the LoginForm component to appear
  await waitFor(() => {
    const loginElement = screen.getByText(/Login Form/i); // Adjust this text to match something in LoginForm
    expect(loginElement).toBeInTheDocument();
  });
});
