export type RadioProps = {
  value: number | string | boolean | string[]
  options: Option[]
  onChange?: (value: number | string | boolean) => void
}

type Option = {
  name: string,
  value: string | number | boolean,
}