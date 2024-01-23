export enum Fields {
  Text = 'text',
  Number = 'number',
  Boolean = 'boolean',
  Date = 'date',
}

export type AppState = Record<string, Record<string, unknown> | unknown>
