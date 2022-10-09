import { useParams } from 'react-router-dom';

export default function CommitsPage() {
  const { username, repo } = useParams();

  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>
        Repo {username} - {repo}
      </h2>
    </main>
  );
}
