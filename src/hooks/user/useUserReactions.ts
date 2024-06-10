import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useAuth } from '../auth/useAuth';
import { db } from '../../firebase';

import { FirebaseError } from './../../types/firebase/firabaseBackErrors.types';

const useUserReactions = () => {
  const { user } = useAuth();
  const [reactions, setReactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReactions = async () => {
      if (!user) return;
      try {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setReactions(docSnap.data().reactions);
        } else {
          setReactions([]);
        }
      } catch (error) {
        const firebaseError = error as FirebaseError;
        const errorMessage = firebaseError.message;
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchReactions();
  }, [user]);

  return { reactions, loading, error };
};

export default useUserReactions;