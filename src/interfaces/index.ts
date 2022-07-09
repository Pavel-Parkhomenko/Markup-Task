// eslint-disable-next-line no-shadow
export enum VariantButton {
  email = 'email',
  register = 'register'
}

export interface IButtonStyled {
  variant: keyof typeof VariantButton
}

export interface IPropsButton extends IButtonStyled{
  title: string,
  onClick: () => void
}
