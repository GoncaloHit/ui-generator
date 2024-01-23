import { ChangeEvent, FC, useState } from 'react'
import { $Input, $Label, $Radio } from './styles'
import { RadioProps as Props } from './types'

export const Radio: FC<Props> = ({ value, options, onChange }) => {
  const [checked, setChecked] = useState<null | number>(null)

  const handleChange =
    (idx: number, value: string | number | boolean) =>
      ({ target: { checked } }: ChangeEvent<HTMLInputElement>) => {
        if (checked) setChecked(idx)
        onChange && onChange(value)
      }

  return (
    <$Radio>
      {options.map((option, idx) => (
        <$Label key={`radio-${idx}`}>
          <$Input checked={option.value === value || checked === idx} onChange={handleChange(idx, option.value)} />
          {option.name}
        </$Label>
      ))}
    </$Radio>
  )
}
