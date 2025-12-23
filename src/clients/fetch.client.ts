import { HttpClient } from "@/clients/http.types";

export const fetchClient: HttpClient = {
	async get<T>(url: string): Promise<T> {
		const res = await fetch(url);
		if (!res.ok) throw new Error("Request failed");
		return res.json();
	},
};
