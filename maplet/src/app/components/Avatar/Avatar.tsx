import React from 'react';
import * as AvatarRadix from '@radix-ui/react-avatar';
import "./Avatar.css";

const Avatar = () => (
    <AvatarRadix.Root className="AvatarRoot">
      <AvatarRadix.Image
        className="AvatarImage"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        alt="Colm Tuite"
      />
      <AvatarRadix.Fallback className="AvatarFallback" delayMs={600}>
        RS
      </AvatarRadix.Fallback>
    </AvatarRadix.Root>
);

export default Avatar;