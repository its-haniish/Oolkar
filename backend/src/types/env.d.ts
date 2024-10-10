declare namespace NodeJS {
    interface ProcessEnv {
        PORT: string;
        MONGO_URI: string; // Add other environment variables as needed
        SECRET_KEY: string;
        // Add any additional environment variables you expect here
    }
}
