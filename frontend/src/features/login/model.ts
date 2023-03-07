import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface LoginState {
  username: string;
  password: string;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
}

export const useLoginStore = create<LoginState>()(
  devtools(
    (set) => ({
      username: "",
      setUsername: (username) => {
        set(() => {
          return { username };
        });
      },
      password: "",
      setPassword: (password) => {
        set(() => {
          return { password };
        });
      },
    }),
    {
      name: "login-state",
    },
  ),
);
