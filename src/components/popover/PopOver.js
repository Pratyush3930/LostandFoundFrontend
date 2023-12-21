import React from 'react';
import type {PopoverProps} from 'react-aria-components';

interface MyPopoverProps extends Omit<PopoverProps, 'children'> {
  children: React.ReactNode;
}

function MyPopover({ children, ...props }: MyPopoverProps) {
  return (
    <Popover {...props}>
      <OverlayArrow>
        <svg width={12} height={12} viewBox="0 0 12 12">
          <path d="M0 0 L6 6 L12 0" />
        </svg>
      </OverlayArrow>
      <Dialog>
        {children}
      </Dialog>
    </Popover>
  );
}

<DialogTrigger>
  <Button aria-label="Help">ⓘ</Button>
  <MyPopover>
    <Heading slot="title">Help</Heading>
    <p>For help accessing your account, please contact support.</p>
  </MyPopover>
</DialogTrigger>