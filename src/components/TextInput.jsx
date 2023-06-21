import { useState } from 'react';
import {
  Box,
  Stack,
  RadioGroup,
  Radio,
  Text,
  Textarea,
  Button,
  useToast,
} from '@chakra-ui/react';

const TextInput = ({ extractKeywords }) => {
  const [text, setText] = useState('');
  const [price, setPrice] = useState('');

  const toast = useToast();

  const submitText = () => {
    if (text === '') {
      toast({
        title: 'Text field is empty',
        description: 'Please enter a place to see things to do',
        status: 'error',
        duration: 5000,
        isClosable: false,
      });
    } else {
      extractKeywords(text, price);
    }
  };

  return (
    <>
      <Box p={4}>
        <RadioGroup onChange={setPrice} value={price}>
          <Stack direction="row">
            <Radio size="lg" colorScheme="green" value="cheap">
              $
            </Radio>
            <Radio size="lg" colorScheme="green" value="moderately priced">
              $$
            </Radio>
            <Radio size="lg" colorScheme="green" value="expensive">
              $$$
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Textarea
        bg="blue.400"
        color="white"
        padding={4}
        marginTop={6}
        height={70}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <Button
        bg="blue.500"
        color="white"
        marginTop={4}
        width="100%"
        _hover={{ bg: 'blue.700' }}
        onClick={submitText}
      >
        Things To Do
      </Button>
    </>
  );
};

export default TextInput;
