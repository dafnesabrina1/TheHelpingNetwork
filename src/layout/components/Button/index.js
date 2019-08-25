// Libraries
import React from 'react';

// Styles
import CustomButton, {
  ExternalButton,
  InternalButton,
  InternalLink
} from './button.style';

const Button = ({
  children,
  noMargin,
  hasExternalLink,
  hasInternalLink,
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
  } else if (hasInternalLink) {
    return (
      <InternalButton noMargin={noMargin} inverted={inverted}>
        <InternalLink to={`${to}`} inverted={inverted}>
          {children}
        </InternalLink>
      </InternalButton>
    );
  } else {
    return (
      <CustomButton noMargin={noMargin} inverted={inverted}>
        {children}
      </CustomButton>
    );
  }
};

export default Button;
