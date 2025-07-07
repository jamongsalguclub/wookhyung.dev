import { createFileRoute } from '@tanstack/react-router';

import { PostsTitlePage } from '~/pages/posts-title/ui/posts-title-page';

export const Route = createFileRoute('/posts/$title')({
  component: PostsTitlePage,
});
