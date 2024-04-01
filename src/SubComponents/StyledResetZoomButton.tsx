import styled from 'styled-components';

export const StyledResetZoomButton = styled.button<{
    $activeColour: string;
    $inactiveColour: string;
    $fontFamily: string;
    $fontSize: number;
    $fontWeight: string;
    $fontStyle: string;
    $color: string;
    $enabled: boolean;
    $margin?: string;
}>`
    align-self: flex-end;
    background-color: ${({$enabled, $activeColour, $inactiveColour}) => ($enabled ? $activeColour : $inactiveColour)};
    border: 2px solid ${({$enabled, $activeColour, $inactiveColour}) => ($enabled ? $activeColour : $inactiveColour)};
    font-family: Arial;
    font-size: 14px;
    min-height: 30px;
    padding: 5px 11px 5px 11px;
    font-family: ${({ $fontFamily }) => $fontFamily};
    font-size: ${({ $fontSize }) => $fontSize}px;
    font-weight: ${({ $fontWeight }) => $fontWeight};
    font-style: ${({ $fontStyle }) => $fontStyle};
    color: ${({ $color }) => $color};
    &:hover {
        background-color: ${({$enabled, $activeColour, $inactiveColour}) => ($enabled ? $activeColour : $inactiveColour)};
        color: ${({ $color }) => $color};
        border: 2px solid ${({$enabled, $activeColour, $inactiveColour}) => ($enabled ? $activeColour : $inactiveColour)};
        outline: ${({$enabled, $activeColour}) => ($enabled ? $activeColour : 'transparent')} solid 2px;
    }
    &:focus {
        outline: ${({$enabled, $activeColour}) => ($enabled ? $activeColour : 'transparent')} solid 2px;
    }
`;