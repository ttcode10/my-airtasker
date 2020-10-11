import PropTypes from 'prop-types';
import React from 'react';
import Modal from '../../../../../../../Modal';
import Button from '../Button';
import Footer from '../Footer';
import Progress from '../Progress';

const Appointment = ({
  onClose,
  onNext,
  onPrevious,
}) => (
  <Modal onClose={onClose}>
    <Modal.Header>Say where &amp; when</Modal.Header>
    <Progress value={`${(100 / 3) * 2}%`} />
    <Modal.Body>Appointment</Modal.Body>
    <Footer>
      <Button variant="secondary" onClick={onPrevious}>Previous</Button>
      <Button variant="success" onClick={onNext}>Next</Button>
    </Footer>
  </Modal>
);

Appointment.propTypes = {
  onClose: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
};

export default Appointment;