import React, { useEffect } from 'react';

function GoogleAuth({ children }) {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href =
        'https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_GOOGLE_CLIENT_ID&redirect_uri=http://localhost:3000&response_type=token&scope=email profile';
    }
  }, []);

  return <>{children}</>;
}

export default GoogleAuth;
