import { ChangeEvent, FC, useEffect, useState } from "react"
import { AppState } from "./types"
import { Inputfield } from "./components"
import { config } from './config'
import { $Label, $Row, $Column, $Section, $Title } from "./styles"
import { Radio } from "components/Radio"


const Generate: FC<{ children: Record<string, unknown> }> = ({ title, onChange, children }) => {
  return (
    <$Column>
      <$Title>{title}</$Title>
      {Object.entries(children).map(([key, value]) => {
        if (Array.isArray(value)) {
          return (
            <$Section key={key}>
              <$Title>{key}</$Title>
              <$Row >
                {value.map((value, idx) => <Inputfield key={value} value={value} onChange={onChange(key, idx)} />)}
              </$Row>
            </$Section>
          )
        }

        if (typeof value === 'boolean') {
          return (
            <$Row key={key}>
              <$Label>{key}</$Label>
              <Radio
                value={value}
                options={[
                  { name: 'true', value: true },
                  { name: 'false', value: false }
                ]}
                onChange={onChange(key)}
              />
            </$Row>
          )
        }

        if (typeof value === 'string') {
          return (
            <$Row key={key}>
              <$Label>{key}</$Label>
              <Inputfield key={key} type='text' name={key} value={value} onChange={onChange(key)} />
            </$Row>
          )
        }

        if (typeof value === 'number') {
          return (
            <$Row key={key}>
              <$Label>{key}</$Label>
              <Inputfield key={key} type='number' name={key} value={value} onChange={onChange(key)} />
            </$Row>
          )
        }

        if (typeof value === 'object') {
          return (
            <Generate title={key} key={key} onChange={(k, i) => onChange(`${key}.${k}`, i)}>
              {value}
            </Generate>
          )
        }

      })}
    </$Column>
  )
}

export const App = () => {
  const [state, setState] = useState<AppState>()

  useEffect(() => {
    async function getConfig() {
      setState(config)
    }

    getConfig()
  }, [])

  const updateState = (obj: object, path: string, value: string | number | boolean, idx?: number) => {
    const [head, ...rest] = path.split('.')
    const isArray = Array.isArray(obj[head]) && idx !== undefined

    if (isArray) obj[head][idx] = value

    return {
      ...obj,
      [head]: rest.length
        ? updateState(obj[head], rest.join('.'), value, idx)
        : isArray ? obj[head] : value
    }
  }

  const handleInputChange = (path: string, idx?: number) => (payload: ChangeEvent<HTMLInputElement> | boolean) => {
    if (typeof payload === 'boolean') {
      setState(updateState(state, path, payload, idx))
    } else {
      setState(updateState(state, path, payload.target.value, idx))
    }
  }

  if (!state) return null

  return (
    <Generate onChange={handleInputChange}>
      {state}
    </Generate>
  )
}