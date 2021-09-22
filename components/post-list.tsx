import React from "react";
import Link from "next/link";

interface Props {
  data: any[];
}

export default function PostBody({ data }: Props) {
  let perYear = "";
  return (
    <div className="max-w-2xl mx-auto">
      <div className="archive-page">
        {data.map(({ title, date, author, slug }) => {
          const currYear = date.split(", ")[1];
          let yearTip;
          if (perYear !== currYear) {
            yearTip = <h3 className="archive-year">@{currYear}</h3>;
            perYear = currYear;
          }
          return (
            <div key={`/${slug}`} className="archive-item">
              {yearTip}
              <div className="item">
                <Link as={`/posts/${slug}`} href={`/posts/${slug}`}>
                  <span>
                    {title} - <span className="date">{date}</span>
                  </span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
