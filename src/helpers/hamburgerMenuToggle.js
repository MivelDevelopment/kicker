import { useState } from 'react';

export const HamburgerMenuToggle = () => {
    const [open, setOpen] = useState(false);
    return { open, setOpen }
}