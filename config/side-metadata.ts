const sideMetadata = {
  /** blog helper 提供博客 add like、visitor 记录、comment 等 serverless 功能 */
  blogHelperOptions: {
    // 激活 like 功能
    enabledLike: true,
    // 激活访客记录功能
    enabledVisitor: true,
    // API 地址
    apiUrl: "https://lxz03fie0k.execute-api.ap-northeast-1.amazonaws.com/prod",
    // apiUrl: 'https://blog-helper-api.thinkmore.xyz/prod',
    // apiUrl: 'http://localhost:3000',
  },
  blogContentPath: `${__dirname}/content/blog-posts`,
  assetContentPath: `${__dirname}/content/assets`,
  pagesContentPath: `${__dirname}/content/pages`,
  basePath: "/",
  author: "Alex Chueng",
  siteTitle: `Alex's blogs`,
  description: "Bring yourself back online.",
  siteUrl: "https://thinkmore.xyz",
  social: {
    // twitter: `sanget`,
    mail: "zh.sanget@gmail.com",
    github: "https://github.com/SANGET",
  },
  footer: {
    showBuildInfo: true,
    since: false,
  },
  sideMenu: [
    {
      title: "Blog",
      path: "/",
    },
    {
      title: "Archive",
      path: "/archive",
    },
    {
      title: "Tags",
      path: "/tags",
    },
    {
      title: "About",
      path: "/about",
    },
  ],
};

export default sideMetadata;
