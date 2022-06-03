import NextLink from "next/link";
import styled from "styled-components";

export default function Link({ href, StyledLink, children }: { href: string; StyledLink?: any, children: any }) {
    if(!StyledLink) {
        StyledLink = styled.a`
            color: #000;
            text-decoration: none;
            font-size: 1.5rem;
            transition: all .1s ease-out;
            &:hover {
                border-bottom: 2.5px #000 solid;
                transition: all .1s ease-out;
                font-weight: bold;
            }
        `
    }

    return (
        <NextLink href={href} passHref>
            <StyledLink>{children}</StyledLink>
        </NextLink>
    )
}