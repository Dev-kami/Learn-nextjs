import { getPostId } from "@/services/getPostId";

import BackButton from "@/components/BackButton";
import CopyButton from "@/components/CopyButton";

const PostsIdPage = async ({ params }: { params: { postId: number } }) => {
  const data: Posts = await getPostId(params.postId);

  return (
    <div className="text-stone-700 flex items-center flex-col mt-10">
      <h1 className="font-bold text-3xl uppercase">
        posts for {params.postId}
      </h1>

      <div className="w-1/2 space-y-3 text-left mt-10 p-5 border border-stone-400">
        <div className="flex gap-5 items-center">
          <h2 className="font-semibold text-2xl capitalize">{data.title}</h2>
          <CopyButton title={data.title} />
        </div>
        <p>{data.body}</p>
        <BackButton />
      </div>
    </div>
  );
};

export default PostsIdPage;
