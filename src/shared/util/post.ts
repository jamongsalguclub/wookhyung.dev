import { allPosts as allPostsGenerated } from 'contentlayer/generated';

export const allPosts = allPostsGenerated
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .filter((post) => !post.draft);
