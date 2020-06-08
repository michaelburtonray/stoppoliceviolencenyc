import { getPage } from '../services/contentful-queries';

import IndexPage from '../components/IndexPage';

const IndexPageContainer = (props) => <IndexPage {...props} />

IndexPageContainer.getInitialProps = async ({ err, req, res, pathname, query, asPath }) => {

  const indexPage = await getPage({ slug: 'index' });
  return { ...indexPage, pathname };

}

export default IndexPageContainer
