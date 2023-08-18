export default async function Home() {
	const data = await fetch("/api/hello").then((res) => res.json());

	return (
		<main className="min-h-[calc(100vh-72.8px)] py-16 container">
			<h1>Home page</h1>
			<p>Data: {data.hello}</p>
		</main>
	);
}
