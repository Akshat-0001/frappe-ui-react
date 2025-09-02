import React, { useContext, ReactNode } from 'react';
import { ListContext } from './listContext';
import ListGroupHeader, { type ListGroupHeaderProps} from './listGroupHeader';
import ListGroupRows from './listGroupRows';

interface ListGroupsProps {
  children?: (props: { group: any }) => ReactNode;
}

const ListGroups: React.FC<ListGroupsProps> = ({ children }) => {
  const { options: list} = useContext(ListContext);

  if (!list) {
    throw new Error('ListGroups must be used within a ListContext.Provider');
  }

  const rowsToRender = list.rows && Array.isArray(list.rows) ? list.rows : [];

  return (
    <div className="h-full overflow-y-auto">
      {rowsToRender.map((group) => (
        <div key={group.group}>
          {children ? (
            children({ group })
          ) : (
            <>
              <ListGroupHeader group={group as ListGroupHeaderProps['group']} />
              <ListGroupRows group={group} />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ListGroups;