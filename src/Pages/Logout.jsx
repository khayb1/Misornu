import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../firebaseConfig'; // Ensure you import your firebase config
import '../Components/Hero.css';

const Logout = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login'); // After logout, go to Login page
  };

  return (
    <button onClick={handleLogout} className="hero-btn">
      Logout
    </button>
  );
};

export default Logout;
