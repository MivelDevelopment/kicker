import React from 'react';
import { FAQ } from '../components';

export const FAQContainer = () => {
    return (
        <FAQ>
            <FAQ.Set>
                <FAQ.Question>My sneakers have arrived, but they don't fit me</FAQ.Question>
                <FAQ.Answer>
                    <p>Don't worry. We're on the same side. Don't throw them against the wall, if they don't fit you they can fit someone else. Wrap them up, send them back and it would have been like you've tried them on in our shop. First return fee is on us.</p>
                </FAQ.Answer>
            </FAQ.Set>
            <FAQ.Set>
                <FAQ.Question>I have changed my mind, can I get a refund?</FAQ.Question>
                <FAQ.Answer>
                    <p>Of course you can. You even have 30 days to make up your mind (since the date they've arrived, not since you've ordered). There's no need to wear something you don't like. You can find something you like better in our store.</p>
                </FAQ.Answer>
            </FAQ.Set>
            <FAQ.Set>
                <FAQ.Question>My sneakers didn't arrive. What do?</FAQ.Question>
                <FAQ.Answer>
                    <p>Reach out to us, it's super easy. <br />We chose our delivery service and we'll get to the bottom of this and fulfill your order in the next 48h.</p>
                </FAQ.Answer>
            </FAQ.Set>
            <FAQ.Set>
                <FAQ.Question>My sneakers disintegrated</FAQ.Question>
                <FAQ.Answer>
                    <p>Oh no. Send them back to us, we'll see that you didn't throw them into the wood chipper and find the solution that fits you best. You can exchange them for the brand new ones or get your money back. </p>
                    <p>As for our manufacturing team... Well, they won't be punished or anything of that sort. We make sure everone does their job to best of their abilities. They can benefit from your worn-out sneakers greatly and prevent these kind of things from happening.</p>
                </FAQ.Answer>
            </FAQ.Set>
            <FAQ.Set>
                <FAQ.Question>What's going on on your Discord channel?</FAQ.Question>
                <FAQ.Answer>
                    <p>Glad you asked. On our Discord you can read and leave reviews super quick and super easy. But that's only the tip of the iceberg. You can team up with likeminded people and share your milestones with everyone.</p>
                    <p>You completed your first 5K?</p>
                    <p>It IS a big deal.
                        <br />That's not inferior to other user running a marathon, that's only inferior to what you can achieve tomorrow. Make us a part of your story and celebrate your milestones together!</p>
                </FAQ.Answer>
            </FAQ.Set>
            <FAQ.Set>
                <FAQ.Question>You seem great! Can I come work for you?</FAQ.Question>
                <FAQ.Answer>
                    <p>As always, you can reach out to us through contact form or social media, but since you won't be working from home and serving people virtually, we'd love to meet you in person. Bring your CV with you, sit down with our store manager and exchange opinions. You can even spend a day on floor with your future coworkers, aiding them in their day-to-day duties.</p>
                </FAQ.Answer>
            </FAQ.Set>
        </FAQ>
    )
};