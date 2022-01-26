import styled from "styled-components";

export const Label = styled.label`
  font-weight: 600;
  margin: 1rem 0;
`;

export const TextInput = styled.input`
  display: block;
  width: 100%;
  border-radius: 0.5rem;
  padding: 15px 16px 14px 16px;
  margin: 0.25rem 0 1rem 0;
  background: transparent;
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

export const Toggle = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }
  
  input:checked + .slider {
    background-color: #2196F3;
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }
  
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

`;
