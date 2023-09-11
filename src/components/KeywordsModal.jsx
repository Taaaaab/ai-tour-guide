import React from 'react';
import {
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  CircularProgress,
  AspectRatio,
} from '@chakra-ui/react';

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const KeywordsModal = ({ keywords, loading, isOpen, closeModal }) => {
  return (
    <>
      <Modal isOpen={isOpen} size="xl" onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Things To Do</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" alignItems="center" justifyContent="center">
            {loading ? (
              <CircularProgress isIndeterminate color="blue.300" />
            ) : (
              <Text>{keywords}</Text>
            )}
          </ModalBody>
          <AspectRatio ratio={16 / 9}>
            {loading ? (
              <CircularProgress isIndeterminate color="blue.300" />
            ) : (
              <iframe
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}
                  &q=${keywords}`}
              />
            )}
          </AspectRatio>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default KeywordsModal;
