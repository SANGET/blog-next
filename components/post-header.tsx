import Avatar from "../components/avatar";
import DateFormatter from "../components/date-formatter";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  blogInfp,
}) {
  const { visitor, liker } = blogInfp;
  return (
    <div className="pt-8 no-print">
      <h1
        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none my-12 text-center md:text-left"
        style={{ paddingBottom: 16 }}
      >
        {title}
      </h1>
      <div className="text-gray-400 flex items-center justify-between">
        <DateFormatter dateString={date} />
        <div className="text-sm">
          <span className="mr-4">visitor {visitor}</span>
          <span className="cursor-pointer hover:text-blue-400">
            like {liker}
          </span>
        </div>
      </div>
    </div>
  );
}
