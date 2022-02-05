import React from 'react';
import { ContactInfo } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faDiscord, faTiktok, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

export const ContactInfoContainer = () => {
    return (
        <ContactInfo className="with-arrow-pointer">
            <ContactInfo.Title>Or find us over here</ContactInfo.Title>
            <ContactInfo.IconsContainer className="fa-icons-row">
                <ContactInfo.IconRow className="insta-row">
                    <FontAwesomeIcon icon={faInstagram} />
                    <ContactInfo.LinkAddress href="https://www.instagram.com"> instagram.com/@mivel-kicker</ContactInfo.LinkAddress>
                </ContactInfo.IconRow>
                <ContactInfo.IconRow className="tiktok-row">
                    <FontAwesomeIcon icon={faTiktok} />
                    <ContactInfo.LinkAddress href="https://www.tiktok.com"> tiktok.com/@mivel-kicker</ContactInfo.LinkAddress>
                </ContactInfo.IconRow>
                <ContactInfo.IconRow className="discord-row">
                    <FontAwesomeIcon icon={faDiscord} />
                    <ContactInfo.LinkAddress href="https://www.discord.com"> discord.gg/mivel-kicker</ContactInfo.LinkAddress>
                </ContactInfo.IconRow>
                <ContactInfo.IconRow className="face-row">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                    <ContactInfo.LinkAddress href="https://www.facebook.com"> facebook.com/mivel-kicker</ContactInfo.LinkAddress>
                </ContactInfo.IconRow>
            </ContactInfo.IconsContainer>
            <ContactInfo.Desc>Make sure to set your notifications to see what items are on sale this week!</ContactInfo.Desc>
        </ContactInfo>
    )
}