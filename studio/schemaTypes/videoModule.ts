import { defineField, defineType } from 'sanity';

function validateYouTubeUrl(value: string | undefined): true | string {
  if (!value) return true;

  const url = URL.parse(value);
  const error = 'Enter a YouTube watch link (https://www.youtube.com/watch?v=…) or a short link (https://youtu.be/…).';

  if (!url || url.protocol !== 'https:' || url.port || url.username || url.password) {
    return error;
  }

  const isWatchLink =
    ['youtube.com', 'www.youtube.com', 'm.youtube.com'].includes(url.hostname) &&
    url.pathname === '/watch';
  const videoId = url.hostname === 'youtu.be'
    ? url.pathname.slice(1)
    : isWatchLink ? url.searchParams.get('v') : null;

  return videoId && /^[A-Za-z0-9_-]{11}$/.test(videoId) ? true : error;
}

export const videoModule = defineType({
  name: 'videoModule',
  title: 'Video Module',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
      validation: (rule) => rule.required().custom(validateYouTubeUrl),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Use a positive whole number. Lower numbers appear first.',
      validation: (rule) => rule.required().integer().min(1),
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'category' },
  },
});
