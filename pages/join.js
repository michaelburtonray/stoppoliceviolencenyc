import { getPage } from '../services/contentful-queries';

import Page from '../components/Page';

const JoinPageContainer = (props) => <Page {...props} />

JoinPageContainer.getInitialProps = async ({ err, req, res, pathname, query, asPath }) => {

  const joinPage = await getPage({ slug: 'join' });
  return { ...joinPage, pathname };
}

export default JoinPageContainer
