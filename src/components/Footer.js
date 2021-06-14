import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { FaDog, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Container = styled.div`
    background-color: #0a6169;
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    color: #fff;
    justify-content: center;
    align-items: center;
`;

const Subscription = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 24px;
    padding: 24px;
    color: #fff;
`;

const SubscriptionHeading = styled.p`
    margin-bottom: 24px;
    font-size: 24px;
`;

const SubscriptionText = styled.p`
    margin-bottom: 24px;
    font-size: 20px;
`;

const InputAreas = styled.div`
    form {
        display: flex;
        align-items: center;
    }
`;

const FooterInput = styled.input`
    padding: 8px 20px;
    border-radius: 2px;
    margin-right: 10px;
    outline: none;
    border: none;
    font-size: 18px;

    &::placeholder {
        color: #b1b1b1;
    }

    @media screen and (max-width: 820px) {
        width: 100%;
    }
`;

const Links = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 2rem;
    }
`;

const LinkWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

const LinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;

    h2 {
        margin-bottom: 16px;
        font-weight: 600;
    }

    a {
        color: #fff;
        text-decoration: none;
        margin-bottom: 6px;
    }

    a:hover {
        color: #FF9B42;
        transition: 0.3s ease-out;
    }
`;

const SocialMedia = styled.section`
    width: 100%;
    max-width: 1000px;
`;

const SocialMediaWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

const FooterLogo = styled.div`
    .social-logo {
        justify-self: start;
        margin-left: 20px;
        display: flex;
        align-self: center;
        margin-bottom: 16px;
        color: #fff;
        text-decoration: none;
        font-style: italic;
        font-size: 1.8rem;
        font-weight: 600;

        &:hover {
        color: #FF9B42;
        transition: 0.3s ease-out;
        }
    }
`;

const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`;

const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
    margin-bottom: 16px;
    
    .social-icon-link {
        color: #fff;
        font-size: 24px;
        text-decoration: none;

        &:hover {
        color: #FF9B42;
        transition: 0.3s ease-out;
        }
    }
`;

const Footer = () => {
    const ScrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <Container id="contact">
            <Subscription>
                <SubscriptionHeading>
                    Join our Legendary Lexi Newsletter to receive your weekly dose of dashing doggos. 
                </SubscriptionHeading>
                <SubscriptionText>
                    Don't worry, you can unsubscribe at any time.
                </SubscriptionText>
                <InputAreas>
                    <form>
                        <FooterInput type="email" name="email" placeholder="Your Email" />
                        <Button className="form-button">Subscribe</Button>
                    </form>
                </InputAreas>
            </Subscription>
            <Links>
                <LinkWrapper>
                    <LinkItems>
                        <h2>About us</h2>
                        <Link to=''>How we work</Link>
                        <Link to=''>Testimonials</Link>
                        <Link to=''>Careers</Link>
                        <Link to=''>Terms of Service</Link>
                    </LinkItems>
                    <LinkItems>
                        <h2>Contact us</h2>
                        <Link to=''>Contact</Link>
                        <Link to=''>Support</Link>
                        <Link to=''>Sponsorships</Link>
                    </LinkItems>
                </LinkWrapper>
                <LinkWrapper>
                    <LinkItems>
                        <h2>Videos</h2>
                        <Link to=''>Commercials</Link>
                        <Link to=''>Ambassadors</Link>
                        <Link to=''>Agency</Link>
                    </LinkItems>
                    <LinkItems>
                        <h2>Social Media</h2>
                        <Link to=''>Instagram</Link>
                        <Link to=''>Facebook</Link>
                        <Link to=''>Youtube</Link>
                        <Link to=''>Twitter</Link>
                    </LinkItems>
                </LinkWrapper>
            </Links>
            <SocialMedia>
                <SocialMediaWrapper>
                    <FooterLogo>
                        <Link to='' onClick={ScrollToTop} className="social-logo">
                            LEXI<FaDog />
                        </Link>
                    </FooterLogo>
                    <WebsiteRights>LEXI © 2021. All rights reserved</WebsiteRights>
                    <SocialIcons>
                        <Link to='/' target='_blank' aria-label='Instagram' className="social-icon-link">
                            <FaInstagram/>
                        </Link>
                        <Link to='/' target='_blank' aria-label='Facebook' className="social-icon-link">
                            <FaFacebook/>
                        </Link>
                        <Link to='/' target='_blank' aria-label='Youtube' className="social-icon-link">
                            <FaYoutube/>
                        </Link>
                        <Link to='/' target='_blank' aria-label='Twitter' className="social-icon-link">
                            <FaTwitter/>
                        </Link>
                    </SocialIcons>
                </SocialMediaWrapper>
            </SocialMedia>
        </Container>
    )
}

export default Footer
