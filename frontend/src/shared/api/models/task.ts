export interface Task {
  id: number;
  name: string;
  description: string | null;
  duration: number | null;
  deadline: Date | null;
  user_id: number;
  party_id: number;
  status_id: number;
}
