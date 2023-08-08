import Link from "next/link";

type PostType = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

const PostsPage = async () => {
	const posts: PostType[] = await fetch(
		"https://jsonplaceholder.typicode.com/posts"
	).then((res) => res.json());

	return (
		<section className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-6 py-16">
			{posts.map((post) => (
				<article
					key={post.id}
					className="bg-white text-black p-4 rounded-lg flex flex-col gap-4"
				>
					<div className="first-letter:uppercase">
						<h1 className="text-xl font-bold line-clamp-1">{post.title}</h1>
						<p className="text-gray-600 text-sm line-clamp-3">{post.body}</p>
					</div>
					<Link
						href={`/posts/${post.id}`}
						className="text-gray-400 font-medium text-sm inline-block w-fit hover:text-gray-500 hover:underline"
					>
						Show details
					</Link>
				</article>
			))}
		</section>
	);
};

export default PostsPage;
