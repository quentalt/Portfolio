import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
font-weight: bold;
font-size:18px;
display: inline-flex;
height: 30px;
padding:10px;
line-height:20px;
align-items: center;

img {
    transform: 200ms ease ;
}

&:hover img { transform: rotate(20deg);
}
`

const Logo = () =>{
    const footPrintimg = `/images/technology${useColorModeValue('','-dark')}.png`

    return(
        <Link href="/" scroll={false}>
        <a>
          <LogoBox>
            { <Image src={footPrintimg} width={25} height={25} alt="logo" /> }
            <Text
              color={useColorModeValue('gray.800', 'whiteAlpha.900')}
              fontFamily='M PLUS Rounded 1c", sans-serif'
              fontWeight="bold"
              ml={3}
            >
              Quentin Altieri
            </Text>
          </LogoBox>
        </a>
      </Link>
    )
  }


export default Logo
    