import React from 'react';
import { Heading, Image, Text } from '@chakra-ui/react';
import logo from '../assets/travel-svgrepo-com.svg';

const Header = () => {
  return (
    <>
      <Image src={logo} alt="logo" width={150} marginBottom="1rem" />
      <Heading color="white" marginBottom="1rem">
        AI Tour Guide
      </Heading>
      <Text fontSize={24} textAlign="center">
        Type where you're looking to go and we'll provide a list of things to do
      </Text>
    </>
  );
};

export default Header;
