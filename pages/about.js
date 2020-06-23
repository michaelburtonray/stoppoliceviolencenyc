import { getPage } from '../services/contentful-queries';

import Page from '../components/Page';

const AboutPageContainer = (props) => <Page {...props} />

AboutPageContainer.getInitialProps = async ({ err, req, res, pathname, query, asPath }) => {

  const AboutPage = await getPage({ slug: 'about' });
  return { ...AboutPage, pathname };
}

export default AboutPageContainer
