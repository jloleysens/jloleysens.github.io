import React from 'react';

import { rhythm, scale } from '../utils/typography';
import { FlexGroup, FlexItem, GithubButtonIcon } from '../components';
import { useAppContext } from '../context';

function Bio() {
  const { assetsUrlPath } = useAppContext();
  return (
    <FlexGroup direction="column" style={{ marginBottom: rhythm(2.5), }} >
      <FlexItem>
        <p>
          Hi, I'm <strong>Jean-Louis Leysens</strong>. I like writing software in
          JavaScript and TypeScript and listening to noisey music.
        </p>
      </FlexItem>
      <FlexItem>
         <GithubButtonIcon />
	 <div style={{ marginLeft: rhythm(1) }} />
	 <a style={{ fontSize: '0.8rem' }} href={`${assetsUrlPath}/pgp-public.txt.asc`} download>
	   My public PGP key
         </a>
      </FlexItem>
    </FlexGroup>
  );
}

export default Bio;
