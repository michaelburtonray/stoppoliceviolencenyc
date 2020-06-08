import "babel-polyfill";

import { createClient } from 'contentful'

const host = process.env.NEXT_PUBLIC_ECRB_CONTENTFUL_API_URL;
const space = process.env.NEXT_PUBLIC_ECRB_CONTENTFUL_SPACE;
const accessToken = process.env.NEXT_PUBLIC_ECRB_CONTENTFUL_ACCESS_TOKEN;

const client = createClient({ host, space, accessToken });

export default client;
