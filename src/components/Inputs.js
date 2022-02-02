import styled from "styled-components";
import { iconBeforeStyles } from "../styles/mixins";
import { Button, ImageButton } from "./Button";

export const Label = styled.label`
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  margin: 1rem 0;
  span.text {
    margin-left: 1rem;
    font: inherit;
  }
`;

export const TextInput = styled.input`
  display: block;
  width: 100%;
  border-radius: 0.5rem;
  padding: 15px 16px 14px 16px;
  margin: 0.25rem 0 1rem 0;
  background-color: var(--color-base);
  color: var(--color-text);
  border: 1px solid var(--color-gray);

  &:focus {
    border-color: var(--color-text-accent);
  }
`;

export const ToggleSwitch = styled.label`

  margin: 1rem 0;
  display: block;

  input + span {
    width: 100%;
    display: block;

    &::before {
      content: "";
      background-image: ${({icon}) => `url(${icon});`}
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      width: 1rem;
      display: inline-block;
      height: 1rem;
      margin-right: 0.75rem;
      position: relative;
      top: 2px;
    }
  }

  input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
  }

  .slider {
    background-color: var(--color-line);
    width: 2.25rem;
    height: 1rem;
    display: inline-block;
    border-radius: 10px;
    position: relative;
    transition: .4s;
    float: right;
  }

  .slider:before {
    content: "";
    height: 20px;
    width: 20px;
    background-color: var(--color-base);
    display: inline-block;
    border-radius: 50%;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
    position: absolute;
    top: -2px;
    transition: .4s;
  }

  input:checked + span {
    &::before {
      color: var(--color-text-accent);
      background-image: ${({iconChecked}) => `url(${iconChecked});`}
    }
  }

  input:checked + span .slider {
    background-color: rgba(95, 64, 125, 0.5);
  }

  input:checked + span .slider:before {
    transform: translateX(16px);
    background-color: var(--color-text-accent);
  }

`;

export const RangeSlider = styled.div`
  width: 100%;
  margin: 1rem 0 .5rem 0;

  input {
    -webkit-appearance: none;  /* Override default CSS styles */
    appearance: none;
    width: 100%; /* Full-width */
    height: 8px; /* Specified height */
    border-radius: 6px;
    background: var(--color-text-transparent);
    outline: none; /* Remove outline */
  }

  input::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 6px; /* Set a specific slider handle width */
    height: 6px; /* Slider handle height */
    background: var(--color-link);
    cursor: pointer; /* Cursor on hover */
  }
  
  input::-moz-range-thumb {
    width: 20px; /* Set a specific slider handle width */
    height: 20px; /* Slider handle height */
    box-sizing: border-box;
    border-radius: 50%;
    background: var(--color-text-accent);
    cursor: pointer; /* Cursor on hover */
    border: none;
  }

`;

export const StarInput = styled.label`
  display: inline-block;
  input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
  }

  &::before {
    ${iconBeforeStyles}
    cursor: pointer;
    background-image: ${({icon}) => `url(${icon});`}
    width: 20px;
    height: 20px;
    margin: 6px .5rem;
    position: relative;
    top: 1px;
  }

`;

export const TagInput = styled.label`
  display: inline-block;
  input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
  }

  margin: .25rem;
  border-radius: 16px;
  padding: 4px 8px 5px 8px;
  width: fit-content;
  background: ${({checked}) => checked ? 'var(--color-secondary)' : 'transparent'};
  border:${({checked}) => checked ? '1px solid var(--color-secondary)' : '1px solid var(--color-text-accent)'};
  font-size: 12px;
  font-weight: 400;
  color: var(--color-text-accent);

`;

export const InputGroup = styled.div`
  background: var(--color-bg-secondary);
  border-radius: 1rem;
  margin: 0.5rem 0;
  padding: 8px 6px;
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({center}) => center ? 'center' : 'flex-start'};
`;
