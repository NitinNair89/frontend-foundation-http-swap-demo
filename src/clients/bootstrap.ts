import { fetchClient } from "./fetch.client";
import { HttpClient } from "./http.types";

let activeClient: HttpClient = fetchClient;

export function getHttpClient() {
	return activeClient;
}

export function setHttpClient(newClient: HttpClient) {
	activeClient = newClient;
}
