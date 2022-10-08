import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/userId">ProfilePage</Link> |{' '}
      <Link to="/userId/repoId">RepoPage</Link>
    </div>
  );
}
