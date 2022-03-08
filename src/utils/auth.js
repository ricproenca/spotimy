import { LOCAL_USER_DATA, storage } from '@Utils/storage';

export const getCurrentUser = () => storage.getItem(LOCAL_USER_DATA);
