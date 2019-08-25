import React from 'react';

import { 
    OrganizationWelcome,
    OrganizationName} from './organizationInfo.style';

const OrganizationTitle = () => {
  return (
    <div>
        <OrganizationWelcome>Welcomeback,</OrganizationWelcome>
        <OrganizationName>Techo</OrganizationName>
    </div>
  );
};

export default OrganizationTitle;