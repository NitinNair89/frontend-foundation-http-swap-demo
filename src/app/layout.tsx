import { AppHeader } from "@/components/AppHeader";
import { ThemeProvider } from "@/providers/theme-provider";
import "@/styles/global.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<meta name="author" content="Nitin Chandran Nair" />
				<meta
					name="description"
					content="This app demonstrates how to use the 'frontend-foundation' template to swap infrastructure implementations without changing UI code."
				/>
				<meta
					name="keywords"
					content="frontend, nextjs, tailwindcss, typescript, http, axios, fetch"
				/>
				<title>Frontend Foundation - HTTP swap demo</title>
			</head>
			<body className="min-h-screen bg-surface text-primary">
				<ThemeProvider>
					<AppHeader />
					<main>{children}</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
