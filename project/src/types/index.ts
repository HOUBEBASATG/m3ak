export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'professional';
  avatar?: string;
  createdAt: Date;
}

export interface Session {
  id: string;
  professionalId: string;
  studentId: string;
  date: Date;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}

export interface Assessment {
  id: string;
  userId: string;
  date: Date;
  responses: Record<string, number>;
  score: number;
}