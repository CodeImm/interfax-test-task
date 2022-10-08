import { useParams } from 'react-router-dom';

export default function ProfilePage() {
  const { userId } = useParams();

  console.log(userId);
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Profile {userId}</h2>
    </main>
  );
}
