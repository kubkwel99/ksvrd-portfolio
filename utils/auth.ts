import Cookies from 'js-cookie';
import { getUser, updateUser } from './userData';

export const login = (username: string, password: string): boolean => {
  const user = getUser();

  if (user && username === user.username && password === user.password) {
    Cookies.set('stayLog', 'logged_in', { expires: 7, sameSite: 'none', secure: true });
    return true;
  }
  return false;
};

export const logout = (): void => {
  Cookies.remove('stayLog'); // Remove auth cookie
};

export const isAuthenticated = (): boolean => {
  return Cookies.get('stayLog') === 'logged_in'; // Return true if the user is logged in
};

export const updatePassword = (username: string, newPassword: string): void => {
  const user = getUser();

  if (user && user.username === username) {
    updateUser(username, newPassword);
    Cookies.set('stayLog', 'logged_in', { expires: 7, sameSite: 'none', secure: true });
    alert('Password updated successfully. You are logged in with your new password.');
  } else {
    alert('User not found.');
  }
};
