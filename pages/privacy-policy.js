import { getPage } from '../services/contentful-queries';

import Page from '../components/Page';

const PrivacyPolicyPageContainer = (props) => <Page {...props} />

PrivacyPolicyPageContainer.getInitialProps = async ({ err, req, res, pathname, query, asPath }) => {

  const privacyPolicyPage = await getPage({ slug: 'privacy-policy' });
  return { ...privacyPolicyPage, pathname };
}

export default PrivacyPolicyPageContainer
