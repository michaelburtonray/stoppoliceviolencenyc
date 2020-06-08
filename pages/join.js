import { getPage } from '../services/contentful-queries';

import JoinPage from '../components/JoinPage';

const JoinPageContainer = (props) => <JoinPage {...props} />

JoinPageContainer.getInitialProps = async ({ err, req, res, pathname, query, asPath }) => {

  const joinPage = await getPage({ slug: 'join' });
  return { ...joinPage, pathname };
}

export default JoinPageContainer
