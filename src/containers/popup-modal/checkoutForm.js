import React, { useEffect } from 'react';
import { Checkout, CartModal, CartModalButtons, RedBtn, BlackBtn } from '../../components';
import { BuyerInfoConsumer } from '../../context/buyerInfoContext';
import { calculateTotal } from '../../helpers/calculateTotal';

export const CheckoutForm = ({ cart, setCart, setFormSent, totalPrice, setTotalPrice }) => {

    const handleSubmit = e => {
        e.preventDefault();
        setCart([])
        setFormSent(true);
    }

    useEffect(() => {
        setTotalPrice(calculateTotal(cart))
    }, [cart, setTotalPrice])

    return (
        <BuyerInfoConsumer>
            {({ buyerName, setBuyerName, email, setEmail, address, setAddress, phone, setPhone, isFilledOut }) => (
                <Checkout>
                    <Checkout.Form onSubmit={handleSubmit}>
                        <Checkout.FormRow>
                            <label htmlFor="name">Name</label>
                            <input id="name" type="text" value={buyerName} onChange={e => setBuyerName(e.target.value)} required="required" />
                        </Checkout.FormRow>

                        <Checkout.FormRow>
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required="required" />
                        </Checkout.FormRow>

                        <Checkout.FormRow>
                            <label htmlFor="address">Address</label>
                            <input id="address" type="text" value={address} onChange={e => setAddress(e.target.value)} required="required" />
                        </Checkout.FormRow>

                        <Checkout.FormRow>
                            <label htmlFor="phone">Phone number</label>
                            <input id="phone" type="text" value={phone} onChange={e => setPhone(e.target.value)} required="required" />
                        </Checkout.FormRow>


                        <CartModal.TotalPrice>Total: {totalPrice}</CartModal.TotalPrice>

                        {cart.length > 0 &&
                            <CartModalButtons className="modal-buttons">
                                <RedBtn className="display-cart">Back to cart</RedBtn>
                                <BlackBtn
                                    type="submit"
                                    disabled={!isFilledOut}
                                    inverse
                                >
                                    Place order
                                </BlackBtn>
                            </CartModalButtons>
                        }
                    </Checkout.Form>
                </Checkout>
            )}
        </BuyerInfoConsumer>
    );
};