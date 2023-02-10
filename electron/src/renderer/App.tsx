import { MemoryRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';
import './App.css';
import './styles/globals.scss'
import SignIn from 'renderer/pages/sign-in/SignIn';
import Ok from 'renderer/pages/ok/Ok';
import Login from 'renderer/pages/login/Login';
import { AuthenticationProvider } from 'renderer/context/AuthenticationContext';
import AppLayout from 'renderer/components/layouts/AppLayout';
import AdminBoard from 'renderer/pages/admin/board/Board';

export default function App() {
  return (
    <AuthenticationProvider>
      <Router>
        <AppLayout>
          <Routes>
            {/*<Route path="/" element={<AdminBoard />} />*/}
            <Route path="/admin/board" element={<AdminBoard />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="signIn/ok" element={<Ok />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<SignIn />} />
          </Routes>
        </AppLayout>
      </Router>
    </AuthenticationProvider>
  );
}
