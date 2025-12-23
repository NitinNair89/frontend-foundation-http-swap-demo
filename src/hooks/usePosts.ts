"use client";

import { loadPosts } from "@/services/posts.service";
import { useEffect, useState } from "react";

export function usePosts() {
	const [posts, setPosts] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);
	const [version, setVersion] = useState<number>(0);

	useEffect(() => {
		setLoading(true);
		loadPosts().then((data) => {
			setPosts(data.slice(0, 5));
			setLoading(false);
		});
	}, [version]);

	function reload() {
		setVersion((v) => v + 1);
	}

	return { posts, loading, reload };
}
