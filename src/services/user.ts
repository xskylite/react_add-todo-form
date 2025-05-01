import users from '../api/users';
import { User } from '../types/User';

export function getUserById(id: number): User | null {
  return users.find(user => user.id === id) || null;
}
