import {
  collection,
  doc,
  setDoc,
  getDoc,
  query,
  where,
  getDocs,
  updateDoc
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Session } from '../types';

const SESSIONS_COLLECTION = 'sessions';

export const sessionService = {
  async createSession(sessionData: Omit<Session, 'id'>): Promise<Session> {
    const sessionRef = doc(collection(db, SESSIONS_COLLECTION));
    const newSession: Session = {
      ...sessionData,
      id: sessionRef.id
    };
    
    await setDoc(sessionRef, newSession);
    return newSession;
  },

  async getSessionById(sessionId: string): Promise<Session | null> {
    const sessionDoc = await getDoc(doc(db, SESSIONS_COLLECTION, sessionId));
    return sessionDoc.exists() ? sessionDoc.data() as Session : null;
  },

  async updateSession(sessionId: string, updates: Partial<Session>): Promise<void> {
    const sessionRef = doc(db, SESSIONS_COLLECTION, sessionId);
    await updateDoc(sessionRef, updates);
  },

  async getUserSessions(userId: string): Promise<Session[]> {
    const q = query(
      collection(db, SESSIONS_COLLECTION),
      where('studentId', '==', userId)
    );
    
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => doc.data() as Session);
  }
};