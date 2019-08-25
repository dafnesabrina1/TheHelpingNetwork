// Libraries
import React from 'react';

// Styles
import { ExternalButton, InternalButton, InternalLink } from './button.style';

const Button = ({
  children,
  noMargin,
  hasExternalLink,
  to,
  href,
  inverted
}) => {
  if (hasExternalLink) {
    return (
      <ExternalButton href={`${href}`} noMargin={noMargin} inverted={inverted}>
        {children}
      </ExternalButton>
    );
  } else {
    return (
      <InternalButton noMargin={noMargin} inverted={inverted}>
        <InternalLink to={`${to}`} inverted={inverted}>
          {children}
        </InternalLink>
      </InternalButton>
    );
  }
};

export default Button;
