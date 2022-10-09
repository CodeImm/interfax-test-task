import { useParams } from 'react-router-dom';

export default function ProfilePage() {
  const { username } = useParams();

  console.log(username);
  return (
    <main style={{ padding: '1rem 0' }}>
      <h2>Profile {username}</h2>
    </main>
  );
}
