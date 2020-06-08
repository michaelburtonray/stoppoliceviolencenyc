import { getPage } from '../services/contentful-queries';

import FaqPage from '../components/FaqPage';

const FaqPageContainer = (props) => <FaqPage {...props} />

FaqPageContainer.getInitialProps = async ({ err, req, res, pathname, query, asPath }) => {

  const faqPage = await getPage({ slug: 'faq' });
  return { faqPage, pathname };
}

export default FaqPageContainer
