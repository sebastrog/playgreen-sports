import { useState } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../auth/useAuth';
import { Reaction } from '../../types/sports/sportsBackResponse';
import { FirebaseError } from 'firebase/app';

const useUpdateReactions = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addOrUpdateReaction = async (newReaction: Reaction) => {
    if (!user) return;

    setLoading(true);
    setError(null);

    const docRef = doc(db, 'users', user.uid);

    try {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        const existingReactions: Reaction[] = userData.reactions || [];
        
        const reactionIndex = existingReactions.findIndex(
          (reaction) => reaction.idSport === newReaction.idSport
        );

        let updatedReactions;

        if (reactionIndex !== -1) {
          updatedReactions = existingReactions.map((reaction, index) =>
            index === reactionIndex ? newReaction : reaction
          );
        } else {
          updatedReactions = [...existingReactions, newReaction];
        }

        await updateDoc(docRef, {
          reactions: updatedReactions,
        });
      } else {
        await updateDoc(docRef, {
          reactions: [newReaction],
        });
      }

      setLoading(false);
    } catch (error) {
      const firebaseError = error as FirebaseError;
      const errorMessage = firebaseError.message;
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { addOrUpdateReaction, loading, error };
};

export default useUpdateReactions;
