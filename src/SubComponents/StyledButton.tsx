import styled from 'styled-components';

export const StyledButton = styled.button<{
    activeColour: string;
    inactiveColour: string;
    fontFamily: string;
    fontSize: number;
    fontWeight: string;
    fontStyle: string;
    color: string;
    enabled: boolean;
    margin?: string;
}>`
    display: inline-block;
    background-color: ${(props) => (props.enabled ? props.activeColour : props.inactiveColour)};
    border: 2px solid ${(props) => (props.enabled ? props.activeColour : props.inactiveColour)};
    padding: 4px 11px;
    margin: ${({ margin }) => margin ?? '0px 20px'};
    font-family: Arial;
    font-size: 14px;
    min-height: 30px;
    font-family: ${({ fontFamily }) => fontFamily};
    font-size: ${({ fontSize }) => fontSize}px;
    font-weight: ${({ fontWeight }) => fontWeight};
    font-style: ${({ fontStyle }) => fontStyle};
    color: ${({ color }) => color};
    &:hover {
        background-color: ${(props) => (props.enabled ? props.activeColour : props.inactiveColour)};
        color: ${({ color }) => color};
        border: 2px solid ${(props) => (props.enabled ? props.activeColour : props.inactiveColour)};
        outline: ${(props) => (props.enabled ? props.activeColour : 'transparent')} solid 2px;
    }
    &:focus {
        outline: ${(props) => (props.enabled ? props.activeColour : 'transparent')} solid 2px;
    }
`;