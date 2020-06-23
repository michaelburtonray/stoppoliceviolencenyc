import { getPage } from '../services/contentful-queries';

import Page from '../components/Page';

const FaqPageContainer = (props) => <Page {...props} />

FaqPageContainer.getInitialProps = async ({ err, req, res, pathname, query, asPath }) => {

  const faqPage = await getPage({ slug: 'faq' });
  return { ...faqPage, pathname };
}

export default FaqPageContainer
