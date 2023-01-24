import { Injectable } from '@nestjs/common';
import { ILabel, ILabelCreationDto, ILabelEditingDto } from '../interfaces';

@Injectable()
export class LabelsState {
    private readonly _data: ILabel[] = [];

    public getIndex(id: number): number {
        return this._data.findIndex((item) => (item.id === id));
    }

    public get(id: number): ILabel {
        const itemIndex = this.getIndex(id);
        const item = this._data[itemIndex];
        
        return item;
    }

    public getAll(): ILabel[] {
        return this._data;
    }

    public create(creationData: ILabelCreationDto): ILabel {
        const item = {
            ...creationData,
            id: Math.random(),
            date: new Date().toJSON()
        };

        this._data.push(item);

        return item;
    }

    public edit(id: number, data: ILabelEditingDto): void {
        const item = this.get(id);
        console.log(item);

        Object.assign(item, data);
    }

    public delete(id: number): void {
        const itemIndex = this.getIndex(id);

        this._data.splice(itemIndex, 1);
    }
}
