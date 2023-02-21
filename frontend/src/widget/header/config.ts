interface Config {
    path: string;
    name: string
}

export const headerConfig: Config[] = [
    { path: "/", name: "home" }, 
    { path: "/login", name: "login" }, 
    { path: "/groups", name: "groups" }, 
    { path: "/", name: "home" },
];