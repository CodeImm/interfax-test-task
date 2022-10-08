import { useParams } from 'react-router-dom';

export default function CommitsPage() {
  const { userId, repoId } = useParams();

  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>
        Repo {userId} - {repoId}
      </h2>
    </main>
  );
}
