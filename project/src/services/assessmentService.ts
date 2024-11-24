import {
  collection,
  doc,
  setDoc,
  query,
  where,
  getDocs,
  orderBy,
  limit
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Assessment } from '../types';

const ASSESSMENTS_COLLECTION = 'assessments';

export const assessmentService = {
  async createAssessment(assessmentData: Omit<Assessment, 'id'>): Promise<Assessment> {
    const assessmentRef = doc(collection(db, ASSESSMENTS_COLLECTION));
    const newAssessment: Assessment = {
      ...assessmentData,
      id: assessmentRef.id
    };
    
    await setDoc(assessmentRef, newAssessment);
    return newAssessment;
  },

  async getUserAssessments(userId: string): Promise<Assessment[]> {
    const q = query(
      collection(db, ASSESSMENTS_COLLECTION),
      where('userId', '==', userId),
      orderBy('date', 'desc')
    );
    
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => doc.data() as Assessment);
  },

  async getLatestAssessment(userId: string): Promise<Assessment | null> {
    const q = query(
      collection(db, ASSESSMENTS_COLLECTION),
      where('userId', '==', userId),
      orderBy('date', 'desc'),
      limit(1)
    );
    
    const snapshot = await getDocs(q);
    return snapshot.empty ? null : snapshot.docs[0].data() as Assessment;
  }
};