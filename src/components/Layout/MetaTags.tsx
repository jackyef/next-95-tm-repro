import * as React from 'react';
import ogImage from '../../assets/logo.png';

export const MetaTags: React.FC = () => {
  return (
    <>
      <meta name="description" content="Description about this microsite" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:title" content="Site title" />
      <meta property="og:description" content="Description about this microsite" />
      <meta name="twitter:title" content="Site title" />
      <meta name="twitter:description" content="Description about this microsite" />
      <meta name="twitter:image:src" content={ogImage} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.example.com/" />

      <link rel="manifest" href="/manifest.json" />
      <link
        rel="icon"
        type="image/png"
        sizes="144x144"
        href="https://ecs7.example.net/assets-example-lite/prod/media/icons/icon144.png"
      />
      <link
        rel="apple-touch-icon"
        type="image/png"
        sizes="144x144"
        href="https://ecs7.example.net/assets-example-lite/prod/media/icons/icon144.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="https://ecs7.example.net/assets-example-lite/prod/media/icons/icon192.png"
      />
      <link
        rel="apple-touch-icon"
        type="image/png"
        sizes="192x192"
        href="https://ecs7.example.net/assets-example-lite/prod/media/icons/icon192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="512x512"
        href="https://ecs7.example.net/assets-example-lite/prod/media/icons/icon512.png"
      />
      <link
        rel="apple-touch-icon"
        type="image/png"
        sizes="512x512"
        href="https://ecs7.example.net/assets-example-lite/prod/media/icons/icon512.png"
      />
    </>
  );
};
