import { getPage } from '../services/contentful-queries';

import Page from '../components/Page';

const NextStepsPageContainer = (props) => <Page {...props} />

NextStepsPageContainer.getInitialProps = async ({ err, req, res, pathname, query, asPath }) => {

  const NextStepsPage = await getPage({ slug: 'next-steps' });
  return { ...NextStepsPage, pathname };
}

export default NextStepsPageContainer
