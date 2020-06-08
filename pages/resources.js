import { getPage } from '../services/contentful-queries';

import ResourcesPage from '../components/ResourcesPage';

const ResourcesPageContainer = (props) => <ResourcesPage {...props} />

ResourcesPageContainer.getInitialProps = async ({ err, req, res, pathname, query, asPath }) => {

  const resourcesPage = await getPage({ slug: 'resources' });
  return { ...resourcesPage, pathname };
}

export default ResourcesPageContainer;
