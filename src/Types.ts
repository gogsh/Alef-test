export interface IPerson {
  name: string
  age: string
}

interface IChild extends IPerson {
  id: number
}

export interface IForm extends IPerson {
  children: IChild[]
}

export type Pages = 'form' | 'preview'
