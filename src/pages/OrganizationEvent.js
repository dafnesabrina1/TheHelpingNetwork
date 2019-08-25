// Libraries
import React from 'react';

// Styles
import OrganizationEvents from '../containers/OrganizationEvents/Events';
import OrganizationInfo from '../containers/OrganizationEvents/OrganizationInfo';

const OrganizationEvent = () => {
  return (
    <div>
      <OrganizationInfo/>
      <OrganizationEvents />
    </div>
  );
};

export default OrganizationEvent;