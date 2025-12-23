import axios from "axios";
import { HttpClient } from "./http.types";

export const axiosClient: HttpClient = {
	async get<T>(url: string): Promise<T> {
		const res = await axios.get<T>(url);
		return res.data;
	},
};
