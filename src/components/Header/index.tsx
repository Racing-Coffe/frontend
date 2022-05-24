import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Details = {
    Logo: {
        Src: "/images/racingcoffe_full.png",
        Alt: "Racing Coffee Logo",
    },
    MenuList: [
        {
            Name: "Home",
            Link: "/",
        },
        {
            Name: "About",
            Link: "/about",
        },
        {
            Name: "Social Media",
            Link: "/social",
        },
    ]
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

const StyledMenu = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
`

const StyledList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
`

const StyledItem = styled.li`
    margin-left: 1rem;
`

const StyledLink = styled.a`
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

export default function Header() {
    return (
        <StyledHeader>
            <StyledTitle>
                <Link href="/" passHref>
                    <Image src={Details.Logo.Src} alt={Details.Logo.Alt} width="300px" height="300px" />
                </Link>
            </StyledTitle>
            <StyledMenu>
                <StyledList>
                    {Details.MenuList.map((item, index) => (
                        <StyledItem key={index}>
                            <Link href={item.Link} passHref>
                                <StyledLink>{item.Name}</StyledLink>
                            </Link>
                        </StyledItem>
                    ))}
                </StyledList>
            </StyledMenu>
        </StyledHeader>
    );
}