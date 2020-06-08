import { getPage } from '../services/contentful-queries';

import PetitionPage from '../components/PetitionPage';

const PetitionPageContainer = (props) => <PetitionPage {...props} />

PetitionPageContainer.getInitialProps = async ({ err, req, res, pathname, query, asPath }) => {

  const petitionPage = await getPage({ slug: 'petition' });
  return { ...petitionPage, pathname };
}

export default PetitionPageContainer
