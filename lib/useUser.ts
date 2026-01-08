'use client';

import { useEffect, useState } from 'react';
import api from './api';

function getToken() {
  return document.cookie
    .split('; ')
    .find(row => row.startsWith('token='))
    ?.split('=')[1];
}

export function useUser() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getToken();

    if (!token) {
      setLoading(false);
      return;
    }

    api
      .get('/auth/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        setUser(res.data);
      })
      .catch(err => {
        console.error('AUTH ERROR', err);
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  const logout = () => {
    document.cookie = 'token=; Max-Age=0; path=/';
    window.location.href = '/login';
  };

  return { user, loading, logout };
}
