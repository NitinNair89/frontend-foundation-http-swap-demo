"use client";

import { axiosClient } from "@/clients/axios.client";
import { fetchClient } from "@/clients/fetch.client";
import { setHttpClient } from "@/clients/registry";
import { FeatureCard } from "@/components/FeatureCard";
import { usePosts } from "@/hooks/usePosts";

export default function Home() {
	const { posts, loading, reload } = usePosts();

	function switchToFetch() {
		setHttpClient(fetchClient);
		reload();
	}

	function switchToAxios() {
		setHttpClient(axiosClient);
		reload();
	}

	return (
		<main>
			<div className="box btn-group">
				<button className="btn" onClick={switchToFetch}>
					Use Fetch
				</button>
				<button className="btn" onClick={switchToAxios}>
					Use Axios
				</button>
			</div>

			{loading && <p>Loading…</p>}

			<ul>
				{posts.map((p) => (
					<li key={p.id}>
						<FeatureCard title={p.title} description={p.body} />
					</li>
				))}
			</ul>
		</main>
	);
}
