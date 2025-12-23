import { getHttpClient } from "@/clients/registry";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export async function loadPosts() {
	return getHttpClient().get<any[]>(`${API_URL}/posts`);
}
