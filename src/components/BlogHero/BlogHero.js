import React from 'react';
import { format } from 'date-fns';
import { StContent, StWrapper } from './BlogHero.styled';

function BlogHero({
  title,
  publishedOn,
  ...delegated
}) {
  const humanizedDate = format(
    new Date(publishedOn),
    'MMMM do, yyyy'
  );

  return (
    <StWrapper
      {...delegated}
    >
      <StContent >
        <h1>{title}</h1>
        <p>
          Published on{' '}
          <time dateTime={publishedOn}>
            {humanizedDate}
          </time>
        </p>
      </StContent>
    </StWrapper>
  );
}

export default BlogHero;
