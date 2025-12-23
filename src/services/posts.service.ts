import { getHttpClient } from "@/clients/bootstrap";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export async function loadPosts() {
	return getHttpClient().get<any[]>(`${API_URL}/posts`);
}
