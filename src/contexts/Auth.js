import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ user, setUser, isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
