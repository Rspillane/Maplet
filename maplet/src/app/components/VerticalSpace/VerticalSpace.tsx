import React from 'react';

interface VerticalSpaceProps {
  height: string | number;
}

const VerticalSpace: React.FC<VerticalSpaceProps> = ({ height }) => {
  return (
    <div style={{ height }} />
  );
};

export default VerticalSpace;