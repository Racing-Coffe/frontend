import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Details = {
    Logo: {
        Src: "/images/racingcoffe_full.png",
        Alt: "Racing Coffee Logo",
    },
}

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    background-color: #fff;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
`

const StyledTitle = styled.h1``

export default function Header() {
    return (
        <StyledHeader>
            <StyledTitle>
                <Link href="/" passHref>
                    <Image src={Details.Logo.Src} alt={Details.Logo.Alt} width="300px" height="300px" />
                </Link>
            </StyledTitle>
        </StyledHeader>
    );
}