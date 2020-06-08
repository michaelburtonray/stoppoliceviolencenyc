import { getPage } from '../services/contentful-queries';

import ContactPage from '../components/ContactPage';

const ContactPageContainer = (props) => <ContactPage {...props} />

ContactPageContainer.getInitialProps = async ({ err, req, res, pathname, query, asPath }) => {

  const contactPage = await getPage({ slug: 'contact' });
  return { ...contactPage, pathname };
}

export default ContactPageContainer
