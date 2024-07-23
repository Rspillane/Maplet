import React from 'react';

interface HoriztonalSpaceProps {
  width: string | number;
}

const HorizontalSpace: React.FC<HoriztonalSpaceProps> = ({ width }) => {
  return (
    <div style={{ width }} />
  );
};

export default HorizontalSpace;