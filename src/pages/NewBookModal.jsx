import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
} from "@chakra-ui/react";
import gif1 from '../assets/NewBook/newbookGIF.gif'
import { Link } from "react-router-dom";
import { useEffect } from "react";



function NewBookModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    useEffect(() => {
        onOpen();
    }, [onOpen]);

    return (
        <>
            <Modal blockScrollOnMount={true} isOpen={isOpen} size={"lg"} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <div className="animate-pulse text-2xl font-bold">New Book Just Released</div>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <div>
                            <img
                                className="object-cover object-center rounded w-full h-full shadow-2xl"
                                alt="hero"

                                src={gif1}
                            />
                        </div>

                    </ModalBody>

                    <ModalFooter>

                        <Link className=" flex bg-red-300 rounded-xl h-10 w-full justify-center items-center text-white animate-pulse" to={'https://play.google.com/store/books/details?id=zPQIEQAAQBAJ'}>Get Book Product Page</Link>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default NewBookModal;
