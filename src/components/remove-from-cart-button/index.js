import React, { useState } from 'react';
import { TrashIcon } from './styles/removeFromCartButton';

const RemoveFromCart = ({ ...restProps }) => {
    const [isTrashIconHovered, setisTrashIconHovered] = useState(false);

    return <TrashIcon
        src={`/img/trash-${isTrashIconHovered ? 'outline' : 'fill'}.png`}
        {...restProps}
        onMouseEnter={() => setisTrashIconHovered(true)}
        onMouseLeave={() => setisTrashIconHovered(false)}
    />
}

export default RemoveFromCart;