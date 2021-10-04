import Avatar from "../components/avatar";
import DateFormatter from "../components/date-formatter";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <div className="pt-8">
      <h1
        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none my-12 text-center md:text-left"
        style={{ paddingBottom: 16 }}
      >
        {title}
      </h1>
      <div className="text-gray-400">
        <DateFormatter dateString={date} />
      </div>
    </div>
  );
}
