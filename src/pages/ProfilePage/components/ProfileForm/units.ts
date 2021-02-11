import styled from '@emotion/styled';
import { colors } from 'src/colors';
import { AlignCenterColumn } from '../../units';

interface IProfileButtonsProps {
    withBackButton: boolean;
}

export const FormBlock = styled(AlignCenterColumn)`
    width: 430px;
`;

export const ProfileField = styled.div`
    width: 100%;

    &:not(:first-of-type) {
        margin-top: 30px;
    }
`;

export const ProfileButtons = styled.div`
    margin-top: 60px;
    display: flex;
    align-self: ${({ withBackButton }: IProfileButtonsProps) =>
        withBackButton ? 'flex-start' : 'center'};
`;

export const ProfileBackButton = styled.div`
    width: 50px;
    height: 50px;
    background-color: ${colors.secondary};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    margin-right: 40px;
    cursor: pointer;
`;
