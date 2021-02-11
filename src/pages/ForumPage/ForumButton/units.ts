import styled from '@emotion/styled';
import { Button } from '@components';
import { colors } from 'src/colors';

export const ForumStyledButton = styled(Button)`
    background-color: ${(props: { isClicked: boolean }) => {
        return props.isClicked ? colors.secondary : colors.GrayScale_20;
    }};
    margin-bottom: 24px;
    height: 70px;
    width: 85%;
    border: none;
`;
