type FeatureCardProps = {
	title: string;
	description: string;
};

export function FeatureCard({ title, description }: FeatureCardProps) {
	return (
		<article className="feature-card">
			<h2 className="feature-title">{title}</h2>
			<p className="feature-description">{description}</p>
		</article>
	);
}
