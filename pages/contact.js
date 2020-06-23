import { getPage } from '../services/contentful-queries';

import Page from '../components/Page';

const ContactPageContainer = (props) => <Page {...props} />

ContactPageContainer.getInitialProps = async ({ err, req, res, pathname, query, asPath }) => {

  const contactPage = await getPage({ slug: 'contact' });
  return { ...contactPage, pathname };
}

export default ContactPageContainer
