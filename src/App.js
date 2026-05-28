import { useEffect, useState } from 'react';
import Header from './components/Header';
import RegisterForm from './components/RegisterForm';
import UserPreview from './components/UserPreview';

function App() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: ''
  });

  useEffect(() => {
    document.title = user.name
      ? `Користувач: ${user.name}`
      : 'Форма реєстрації';
  }, [user.name]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const clearForm = () => {
    setUser({
      name: '',
      email: '',
      age: ''
    });
  };

  return (
    <div>
      <Header />

      <RegisterForm
        user={user}
        handleChange={handleChange}
        clearForm={clearForm}
      />

      <UserPreview user={user} />
    </div>
  );
}

export default App;