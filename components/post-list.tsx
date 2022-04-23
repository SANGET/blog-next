import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import Content from "./content";

interface Props {
  data: any[];
}

export default function PostBody({ data }: Props) {
  let perYear = 0;
  return (
    <Content>
      <div className="archive-page">
        {data.map(({ title, date, author, slug }) => {
          const currYear = dayjs(date).year();
          let yearTip;
          if (perYear !== currYear) {
            yearTip = (
              <div className="archive-year text-xl text-gray-400 mt-12 mb-4">
                @{currYear}
              </div>
            );
            perYear = currYear;
          }
          return (
            <div key={`/${slug}`} className="archive-item">
              <div className="timeline">{yearTip}</div>
              <Link as={`/posts/${slug}`} href={`/posts/${slug}`} passHref>
                <div className={`item cursor-pointer py-4 text-gray-600`}>
                  <span>
                    <span className="text">{title}</span> -{" "}
                    <span className="date">{date}</span>
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="tip text-gray-300 py-4">{data.length} posts</div>
    </Content>
  );
}
