import { allNotesPosts, allTechPosts } from 'contentlayer/generated';

export const allPosts = [...allTechPosts, ...allNotesPosts]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .filter((post) => !post.draft);

export const techPosts = allTechPosts
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .filter((post) => !post.draft);

export const notesPosts = allNotesPosts
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .filter((post) => !post.draft);
