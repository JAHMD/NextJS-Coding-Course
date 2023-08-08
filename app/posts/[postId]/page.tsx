import PostDetails from "@/components/PostDetails";

type PropsType = {
	params: { postId: string };
};

const PostDetailsPage = ({ params }: PropsType) => {
	return (
		<section className="container py-16">
			<PostDetails postId={params.postId} />
		</section>
	);
};

export default PostDetailsPage;
