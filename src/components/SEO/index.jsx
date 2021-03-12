import Head from 'next/head';
import { PropTypes } from 'prop-types';

const SEO = ({ headTitle }) => {
  const hasheadTitle = Boolean(headTitle);

  const baseTitle = 'Instalura - Projeto Base do Alura Bootcamp JAMStack';
  const title = hasheadTitle ? `${headTitle} | ${baseTitle}` : baseTitle;

  const description =
    'Projeto desenvolvido durante o Bootcamp JAMStack da Alura Cursos Online';
  const appUrl = 'https://instalura-pmdpaula.vercel.app';
  const image = '/seo.jpg';

  return (
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>{title}</title>

      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={appUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={appUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
};

export default SEO;

SEO.defaultProps = {
  headTitle: null,
};

SEO.propTypes = {
  headTitle: PropTypes.string,
};
