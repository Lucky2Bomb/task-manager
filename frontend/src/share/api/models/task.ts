export interface Task {
    name: string;
    description: string | null;
    duration: number | null;
    deadline: Date | null;
    user_id: number;
    party_id: number;
    status_id: number;
}