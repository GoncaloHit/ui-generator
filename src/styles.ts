import styled from 'styled-components'

export const $Title = styled.h1`
  font-size: 20px;
`

export const $Label = styled.label`
  font-weight: bold;
  width: 100px;
`

export const $Row = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  gap: 12px;
  border: 1px dashed gray;
`

export const $Column = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  padding: 12px;
  gap: 12px;
`

export const $Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  border: 1px solid black;
`