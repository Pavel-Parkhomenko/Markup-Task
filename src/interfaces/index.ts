export interface IButtonStyled {
  marginRight: number,
  width: number,
  type: 'email' | 'register',
}

export interface IPropsButton extends IButtonStyled{
  title: string
}
