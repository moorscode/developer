import React from 'react';
import {PageMetadata} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/theme-common/internal';
export default function DocItemMetadata() {
  const {metadata, frontMatter} = useDoc();
  const metaImage = "https://yoast.com/shared-assets/opengraph/?title=" + encodeURIComponent( metadata.title );
  return (
    <PageMetadata
      title={metadata.title}
      description={metadata.description}
      keywords={frontMatter.keywords}
      image={frontMatter.image ?? metaImage}
    />
  );
}
