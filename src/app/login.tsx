"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, ajoute la logique d'authentification
    if (!email || !password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }
    setError("");
    // Redirige ou affiche un message de succès
    alert("Connexion réussie !");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-green-700">
          Connexion Patient
        </h1>
        {error && (
          <div className="mb-4 text-red-600 text-sm text-center">{error}</div>
        )}
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Votre email"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 text-gray-700">Mot de passe</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Votre mot de passe"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
}