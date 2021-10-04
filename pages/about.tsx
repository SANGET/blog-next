import Content from "@/components/content";
import Layout from "@/components/layout";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <Layout>
      <Content>
        <div className="about pt-12">
          <div className="title text-xl text-gray-400">About</div>
          <div className="intro my-4 text-gray-600">
            我是 Alex（相杰），90 后，低调务实，喜欢喝早茶。
          </div>
          <div className="intro my-4 text-gray-600">
            喜欢 Coding、吉他、书、摄影、旅游。
          </div>
          {/* <div className="intro my-4 text-gray-600">极简主义。</div> */}
        </div>
        <div className="my-8 divid" />
        <div className="flex flex-wrap img-container">
          <div className="w-4/12">
            <img
              className="p-1"
              src="https://cdn.jsdelivr.net/gh/SANGET/blog-v3@master/content/assets/images/me/19.jpg"
            />
            <img
              className="p-1"
              src="https://cdn.jsdelivr.net/gh/SANGET/blog-v3@master/content/assets/images/me/7.jpg"
            />
          </div>
          <div className="w-4/12">
            <img
              className="p-1"
              src="https://cdn.jsdelivr.net/gh/SANGET/blog-v3@master/content/assets/images/me/9.jpg"
            />
            <img
              className="p-1"
              src="https://cdn.jsdelivr.net/gh/SANGET/blog-v3@master/content/assets/images/me/15.jpg"
            />
          </div>
          <div className="w-4/12">
            <img
              className="p-1"
              src="https://cdn.jsdelivr.net/gh/SANGET/blog-v3@master/content/assets/images/me/16.jpg"
            />
            <img
              className="p-1"
              src="https://cdn.jsdelivr.net/gh/SANGET/blog-v3@master/content/assets/images/me/5.jpg"
            />
          </div>
        </div>
        <div className="my-8 divid" />
        <div>
          我的
          <ul className="list-none">
            <Link href={`/reading`}>
              <li>reading list</li>
            </Link>
            <Link href={`/resume`}>
              <li>online resume</li>
            </Link>
          </ul>
        </div>
      </Content>
    </Layout>
  );
}
