import React from 'react';
import { format } from 'date-fns';

import { StArrow, StContinueReadingLink, StTitle, StWrapper } from './BlogHero.styled.js';

function BlogSummaryCard({
  slug,
  title,
  publishedOn,
  abstract,
}) {
  const href = `/${slug}`;
  const humanizedDate = format(
    new Date(publishedOn),
    'MMMM do, yyyy'
  );

  return (
    <StWrapper>
      <StTitle href={href}>
        {title}
      </StTitle>
      <time dateTime={publishedOn}>{humanizedDate}</time>
      <p>
        {abstract}{' '}
        <StContinueReadingLink
          href={href}
        >
          Continue reading{' '}
          <StArrow>→</StArrow>
        </StContinueReadingLink>
      </p>
    </StWrapper>
  );
}

export default BlogSummaryCard;
