import { Route, Routes } from 'react-router-dom';

import HomePage from 'pages/Home';
import ProfilePage from 'pages/Profile';
import CommitsPage from 'pages/Commits';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:userId" element={<ProfilePage />} />
        <Route path="/:userId/:repoId" element={<CommitsPage />} />
      </Routes>
    </>
  );
}

export default App;
