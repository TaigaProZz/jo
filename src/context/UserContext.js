// context/UserContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import getUser from '@/services/user.service';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUser();
        setUser(user);
      } catch (error) {
        setUser({});
      }
    };
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {user ? children : 'loading'}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
