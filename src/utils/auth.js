import { USER_ACCESS_TOKEN } from '@Config/storage';
import { storage } from '@Services/storage';

export const getCurrentUser = () => storage.getItem(USER_ACCESS_TOKEN);
