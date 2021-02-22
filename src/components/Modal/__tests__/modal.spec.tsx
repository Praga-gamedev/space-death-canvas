import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { Modal } from '@components/Modal';

const defaultModalProps = { show: true, onClose: () => {} };

describe('Modal component', () => {
    test('modal rendered correctly', () => {
        const ModalComponent = renderer
            .create(<Modal {...defaultModalProps} />)
            .toJSON();

        expect(ModalComponent).toMatchSnapshot();
    });

    test('modal content rendered correctly', () => {
        const modalBody = 'modal text';
        const modalContentId = 'modalContent';

        const ModalComponent = mount(
            <Modal {...defaultModalProps}>
                <div data-test-id={modalContentId}>{modalBody}</div>
            </Modal>
        );
        const ModalContent = ModalComponent.find({
            'data-test-id': modalContentId,
        });

        expect(ModalContent).toBeDefined();
        expect(ModalContent.text()).toBe(modalBody);
    });

    test('close event working', () => {
        const onClose = jest.fn();
        const props = { onClose, show: true };

        const ModalComponent = mount(<Modal {...props} />);
        ModalComponent.find({ 'data-test-id': 'modalOverlay' })
            .hostNodes()
            .simulate('click');

        expect(onClose).toBeCalledTimes(1);
    });

    test('close event not triggered if click on body', () => {
        const onClose = jest.fn();
        const modalBody = 'Body';
        const props = { onClose, show: true, children: modalBody };

        const ModalComponent = mount(<Modal {...props} />);
        ModalComponent.find({ children: modalBody })
            .hostNodes()
            .simulate('click');

        expect(onClose).not.toHaveBeenCalled();
    });
});
