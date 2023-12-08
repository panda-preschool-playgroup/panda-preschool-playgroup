import { Dispatch, SetStateAction } from "react";
import { Modal } from "flowbite-react";

interface TourModalProps {
    openTourModal: boolean;
    setOpenTourModal: Dispatch<SetStateAction<boolean>>;
}

const TourModal = ({ openTourModal, setOpenTourModal }: TourModalProps) => {
    return (
        <Modal dismissible size="md" show={openTourModal} onClose={() => setOpenTourModal(false)}>
            <Modal.Header />
            <Modal.Body>
                {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                <video className="w-full" controls>
                    <source src="https://www.pandaplaygroup.co.uk/tour.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </Modal.Body>
        </Modal>
    );
};

export default TourModal;
