import { CapacitorConfig } from "@capacitor/cli";
const config: CapacitorConfig = {
    appId: "io.ionic.starter",
    appName: "Frienda",
    webDir: "dist",
    server: {
        androidScheme: process.env.LOCAL_SERVER ? "http" : "https",
    },
    plugins: {
        CapacitorCookies: {
            enabled: true,
        },
        CapacitorHttp: {
            enabled: true,
        },
    },
};
export default config;
