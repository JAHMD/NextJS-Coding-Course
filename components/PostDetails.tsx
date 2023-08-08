const PostDetails = async ({ postId }: { postId: string }) => {
	const post = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}`
	).then((res) => res.json());

	return (
		<div className="flex flex-col gap-6 mt-10">
			<h2 className="text-xl sm:text-3xl font-bold first-letter:uppercase">
				{post.title}
			</h2>
			<p className="text-gray-400 first-letter:uppercase">{post.body}</p>
		</div>
	);
};

export default PostDetails;
