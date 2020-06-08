import contentfulClient from './contentful-client';

export const getPage = ({ slug }) => {
  return contentfulClient.getEntries({
    'content_type': 'page',
    'fields.slug': slug,
    'include': '4'
  }).then(entries => entries.items[0])
}
