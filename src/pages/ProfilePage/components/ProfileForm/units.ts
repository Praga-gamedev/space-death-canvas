import styled from '@emotion/styled';
import { AlignCenterColumn } from '../../units';

export const FormBlock = styled(AlignCenterColumn)`
    width: 430px;
`;

export const ProfileField = styled.div`
    width: 100%;

    &:not(:first-of-type) {
        margin-top: 30px;
    }
`;
