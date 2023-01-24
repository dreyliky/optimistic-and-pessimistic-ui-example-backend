import { ILabel } from './label.interface';

export interface ILabelEditingDto extends Pick<ILabel, 'name' | 'color'> {}
