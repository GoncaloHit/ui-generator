import styled from 'styled-components'

export const $Radio = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`
export const $Input = styled.input.attrs(() => ({ type: 'radio' }))`
  display: grid;
  place-content: center;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.secondary};
  border-radius: 50%;
  transform: translateY(-2px);

  &:checked {
    border: 2px solid ${({ theme }) => theme.primary};
  }

  &::before {
    content: "";
    width: 12px;
    height: 12px;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 12px 12px ${({ theme }) => theme.primary};
  }

  &:checked::before {
    transform: scale(1);
  }
`

export const $Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
`