"use client";

import { useState } from "react";

export default function SignupPage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!username || !email || !password) {
            setError("All fields are required");
            return;
        }

        console.log("Signup Data:", { username, email, password });
    };

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <h2 className="text-lg font-semibold text-center mb-2">Signup</h2>
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

            <label className="block font-medium">Username</label>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border rounded mb-3"
            />

            <label className="block font-medium">Email</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded mb-3"
            />

            <label className="block font-medium">Password</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded mb-3"
            />

            <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
                Signup
            </button>
        </form>
    );
}
