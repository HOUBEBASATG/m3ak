import { 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc,
  query,
  where,
  getDocs
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { User } from '../types';

const USERS_COLLECTION = 'users';

export const userService = {
  async createUser(userData: Omit<User, 'id' | 'createdAt'>): Promise<User> {
    const userRef = doc(collection(db, USERS_COLLECTION));
    const newUser: User = {
      ...userData,
      id: userRef.id,
      createdAt: new Date()
    };
    
    await setDoc(userRef, newUser);
    return newUser;
  },

  async getUserById(userId: string): Promise<User | null> {
    const userDoc = await getDoc(doc(db, USERS_COLLECTION, userId));
    return userDoc.exists() ? userDoc.data() as User : null;
  },

  async updateUser(userId: string, updates: Partial<User>): Promise<void> {
    const userRef = doc(db, USERS_COLLECTION, userId);
    await updateDoc(userRef, updates);
  },

  async getProfessionals(): Promise<User[]> {
    const q = query(
      collection(db, USERS_COLLECTION),
      where('role', '==', 'professional')
    );
    
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => doc.data() as User);
  }
};