import React from 'react';
import { Shipping } from '../components';

export const ShippingContainer = () => {
    return (
        <Shipping>
            <Shipping.HalfColumns order={1}>
                <Shipping.Image src="/img/package-image.jpg" alt="nike-sneakers-box-delivered-to-customer" author="AIRIZ" unsplash="@arizhzzz" />
            </Shipping.HalfColumns>

            <Shipping.HalfColumns order={2}>
                <h2>Top-notch delivery service</h2>
                <p>We stand behind our delivery service and we're confident that nothing will happen to your package during transport. We've built Delivery Inc. from the ground up along with Kicker, as a subsidiary because we didn't want our product to leave our hands before it reaches yours. That way we can guarantee your satisfaction and problem-free package delivery.</p>
                <h2>Local or Transatlantic?</h2>
                <p>No matter where you live/want your package delivered. <br />If you can spell it, we can find it. </p>
                <h2>All-inclusive</h2>
                <p>For the prices as low as ours, your sneakers come with included (paid for) tax, delivery fee and wrapping paper (if you'd like one). Everything... <br />Except gratuity. We'll leave that up to you.</p>
                <h2>Have something different in mind?</h2>
                <p>Do you want to make some other arrangements? We have absolutely no problem with that. However, you can not hold us responsible if other delivery company roughs up the package being delivered. Plus, our delivery service is included in price, so unless you want a drone delivery, we really don't see the point of risk. <br />But hey, it is up to you to decide and us to make it happen.</p>
            </Shipping.HalfColumns>
        </Shipping>
    )
}