import React from "react";
import { connect, styled } from "frontity";
import Link from "../utils/link";
import { inDesktop } from '../utils/media-queries';
import { Logo } from '../utils/icons';

const Hero = ({state}) => {
    const { hero } = state.frontity;
    const { content, cta } = hero; 
  return (
    <Wrapper>
        <Container>
            <LogoMobile>
                <Link link="/">
                    <Logo />
                </Link>
            </LogoMobile>
            <Title>{content}</Title>
            <p><Cta link={cta.link} className="link">{cta.content}</Cta></p>
        </Container>
    </Wrapper>
  );
};

export default connect(Hero);

const Cta = styled(Link)`
    --font-size: .5;
`;
const Wrapper = styled.section`
    --padding-top: 0;
    --padding-bottom: 2;
    background-color: var(--background-brand-dark);
`;

const Title = styled.h1`
    --font-size: 3;
    --margin-bottom: 1;
    --line-height: 1.5;
    max-width: 493px;
`;

const Container = styled.div`
    width: var(--container-percentage);
    max-width: var(--container-normal);
    --padding-top: 1;
    margin:0 auto;
`;
const LogoMobile = styled.div`
    --padding-top: 0;
    ${inDesktop} {
        display: none;
    }
`
