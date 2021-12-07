import React, { FC, ReactNode } from 'react';
import { usePermissions } from '../../hooks/Permissions';

type Props = {
  roles: string[];
  children?: ReactNode;
};

const AccessControl: FC<Props> = ({ children, roles }) => {
  const { hasAccess } = usePermissions(roles);

  if (hasAccess) return <>{children}</>;
  else
    return (
      <p className="my-5 mx-2 text-3xl text-center text-red-600 font-bold">
        Você não tem permissão para acessar esta página!
      </p>
    );
};

export default AccessControl;
