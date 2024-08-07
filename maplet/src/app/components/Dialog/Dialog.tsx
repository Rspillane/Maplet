import * as Dialog from '@radix-ui/react-dialog';
import React from "react";
import { ReactDOM } from 'react';

export default ({ children }) => (
  <Dialog.Root>
    <Dialog.Trigger>
        { children }
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay />
      <Dialog.Content>
        <Dialog.Title>Dialog Box</Dialog.Title>
        <Dialog.Description>lorem</Dialog.Description>
        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            X
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);