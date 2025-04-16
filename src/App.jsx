import React, { useState } from 'react';
import LoginModal from './LoginModal'; // Replace with the correct path

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div>
        <button onClick={() => setShowLogin(true)}>Log In</button>
        <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
      </div>
    </>
  );
};

export default App;
