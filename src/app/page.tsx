"use client";

import { useState } from "react";
import { UserIcon, UserGroupIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

const roles = [
	{
		label: "Patient",
		value: "patient",
		icon: <UserIcon className="h-6 w-6 text-green-600" />,
	},
	{
		label: "Médecin",
		value: "medecin",
		icon: <UserGroupIcon className="h-6 w-6 text-blue-600" />,
	},
	{
		label: "Administrateur",
		value: "admin",
		icon: <ShieldCheckIcon className="h-6 w-6 text-purple-600" />,
	},
];

export default function LoginPage() {
	const [role, setRole] = useState("patient");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!email || !password) {
			setError("Veuillez remplir tous les champs.");
			return;
		}
		setError("");
		alert(`Connexion réussie en tant que ${role} !`);
	};

	return (
		<div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-100 via-blue-100 to-purple-100">
			<form
				onSubmit={handleSubmit}
				className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
			>
				<h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
					Connexion
				</h1>
				<div className="flex justify-center gap-4 mb-8">
					{roles.map((r) => (
						<button
							type="button"
							key={r.value}
							onClick={() => setRole(r.value)}
							className={`flex flex-col items-center px-4 py-2 rounded-lg border-2 transition ${
								role === r.value
									? "border-green-600 bg-green-50"
									: "border-gray-200 bg-gray-50 hover:border-green-300"
							}`}
						>
							{r.icon}
							<span className="mt-1 text-xs font-medium">{r.label}</span>
						</button>
					))}
				</div>
				{error && (
					<div className="mb-4 text-red-600 text-sm text-center">{error}</div>
				)}
				<div className="mb-4">
					<label className="block mb-1 text-gray-700">Email</label>
					<input
						type="email"
						className="w-full border border-gray-300 rounded-lg px-3 py-2"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
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
						onChange={(e) => setPassword(e.target.value)}
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