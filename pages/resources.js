import { getPage } from '../services/contentful-queries';

import Page from '../components/Page';

const ResourcesPageContainer = (props) => <Page {...props} />

ResourcesPageContainer.getInitialProps = async ({ err, req, res, pathname, query, asPath }) => {

  const resourcesPage = await getPage({ slug: 'resources' });
  return { ...resourcesPage, pathname };
}

export default ResourcesPageContainer;
