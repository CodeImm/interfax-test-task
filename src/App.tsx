import { Route, Routes } from 'react-router-dom';

import HomePage from 'pages/Home';
import ProfilePage from 'pages/Profile';
import CommitsPage from 'pages/Commits';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:username" element={<ProfilePage />} />
        <Route path="/:username/:repo" element={<CommitsPage />} />
      </Routes>
    </>
  );
}

export default App;
