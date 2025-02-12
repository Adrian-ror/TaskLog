import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useUsersStore = create(
    devtools(
        (set, get) => ({
            currentUser: null,
            getUser: () => get().currentUser,
            setUser: (user) => set({ currentUser: user })
        }),
        { name: 'user-store' }
    )
);
