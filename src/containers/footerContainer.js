import React from 'react';
import { Footer } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faDiscord, faTiktok, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';



export const FooterContainer = () => {
    const currentDate = new Date();
    console.log()
    return (
        <Footer>
            <Footer.InnerContainer>
                <Footer.Column className="logo-column">
                    <Footer.Title>Get a kick start with</Footer.Title>
                    <Footer.Logo src="img/logo.png" />
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>100% customer satisfaction</Footer.Title>
                    <p>We are commited to delivering your orders safely and conscientiously. The package you ordered will not leave our hands until it reaches yours.</p>
                    <p>This is possible because we're the ones behind manufacturing, packaging and delivering and we don't set our company's future and your satisfaction into other people's hands.</p>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>30 days money-back guarantee</Footer.Title>
                    <p>We get it. It's shoes. <br />
                        Sometimes it they aren't the perfect fit and that's a genuine concern of online shopping.</p>
                    <p>You know what? If they're not your size, you don't like the color, or your SO doesn't like how they look, send them back and you'll get the full refund. <br />
                        (PS. You don't even need to tell us why)</p>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Find us</Footer.Title>
                    <div className="fa-icons-row">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer nofollow"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer nofollow"><FontAwesomeIcon icon={faTiktok} /></a>
                        <a href="https://www.discord.com" target="_blank" rel="noopener noreferrer nofollow"><FontAwesomeIcon icon={faDiscord} /></a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer nofollow"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                    </div>

                    <p>Reach out! Follow us for more updates, <br />
                        or share the achievements you've made in our sneakers.</p>
                    <p>We can't wait to see what you've done.</p>
                    <p>You can even find people who enjoy the same things you do.</p>
                </Footer.Column>

            </Footer.InnerContainer>
            <hr />
            <Footer.Copyright>© {currentDate.getFullYear()} Milos Veljkovic. All rights reserved.</Footer.Copyright>
        </Footer>
    );
};