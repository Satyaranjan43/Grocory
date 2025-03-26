"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!username || !password) {
            setError("Username and Password are required");
            return;
        }

        console.log("Login Data:", { username, password });
        router.push("/dashboard"); // Redirect after login
    };

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <h2 className="text-lg font-semibold text-center mb-2">Login</h2>
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

            <label className="block font-medium">Username</label>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border rounded mb-3"
            />

            <label className="block font-medium">Password</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded mb-3"
            />

            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Login
            </button>
        </form>
    );
}
