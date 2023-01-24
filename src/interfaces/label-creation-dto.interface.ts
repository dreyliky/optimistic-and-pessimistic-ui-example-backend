import { ILabel } from './label.interface';

export interface ILabelCreationDto extends Pick<ILabel, 'name' | 'color'> {}
