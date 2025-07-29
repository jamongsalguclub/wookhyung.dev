import { defineDocumentType, makeSource } from 'contentlayer2/source-files';
import rehypePrismPlus from 'rehype-prism-plus';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'date of the post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'description of the post',
      required: false,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: false,
    },
    summary: {
      type: 'string',
      description: 'summary of the post',
      required: false,
    },
    draft: {
      type: 'boolean',
      description: 'draft of the post',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (post) => post._raw.flattenedPath,
    },
  },
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
      [
        rehypePrismPlus,
        {
          ignoreMissing: true,
          showLineNumbers: true,
        },
      ],
    ],
  },
});
