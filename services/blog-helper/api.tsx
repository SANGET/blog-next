import $R from "../req";
import { SessionCache } from "./cache";

export interface Counter {
  counter: number[];
  counterForBlog?: {
    [title: string]: number;
  };
  detail?: {};
}

interface CounterStruct {
  data: Counter;
}

// let setHeader = false;
/**
 * 将 fingerprint 设置到 request header 之中
 */
// const setFPHeader = async (data) => {
//   if (!setHeader) {
//     const fingerprint = await getClientFingerprint();
//     initRequest().setConfig({
//       commonHeaders: {
//         // 浏览器指纹
//         FP: fingerprint,
//       }
//     });
//     setHeader = true;
//   }
//   return data;
// };

const genCounterForBlog = (blogTitles: string[], counters: number[]) => {
  const resData = {};
  blogTitles.forEach((title, idx) => {
    const currCounterforBlog = counters[idx];
    resData[title] = currCounterforBlog;
  });
  return resData;
};

let LikeCache;
/**
 * 喜欢博客，暂时只有喜欢，没有取消
 */
export const LikeBlog = async (blogTitle: string) => {
  if (!LikeCache) LikeCache = new SessionCache("LikeCache");
  const hasLiked = LikeCache.getItem(blogTitle);
  if (hasLiked) {
    return {
      message: "visited",
    };
  }
  const res = await $R().get<CounterStruct>("/like", {
    params: { blogTitle },
  });

  LikeCache.setItem(blogTitle, "true");

  return res.data;
};

/**
 * 通过 title 获取博客的喜欢数
 */
export const GetLikeByTitles = async (
  blogTitles: string[],
  isReturnDetail = false
) => {
  const res = await $R().post<any>("/likes", {
    blogTitles,
    detail: isReturnDetail,
  });
  const resData = res.data.data;
  resData.counterForBlog = genCounterForBlog(blogTitles, resData.counter);

  return resData;
};

let VisitCache;
/**
 * 访问博客
 */
export const VisitBlog = async (blogTitle: string) => {
  if (!VisitCache) VisitCache = new SessionCache("VisitCache");
  // const hasVisited = VisitCache.getItem(blogTitle);
  // if (hasVisited) {
  //   return {
  //     message: 'visited'
  //   };
  // }
  const res = await $R().get<any, CounterStruct>("/visit", {
    params: { blogTitle },
  });

  VisitCache.setItem(blogTitle, "true");

  return res.data;
};

/**
 * 通过 title 获取博客的访客数
 */
export const GetVisitorsByTitles = async (blogTitles: string[]) => {
  const res = await $R().post<any>("/visitors", { blogTitles });
  const resData = res.data.data;
  resData.counterForBlog = genCounterForBlog(blogTitles, resData.counter);

  return resData;
};
