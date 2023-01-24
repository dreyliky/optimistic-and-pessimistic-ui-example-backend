import { Injectable } from '@nestjs/common';
import { ILabel, ILabelCreationDto, ILabelEditingDto } from '../interfaces';
import { LabelsState } from '../states/labels.state';

@Injectable()
export class LabelsService {
    constructor(
        private readonly labelsState: LabelsState
    ) {}

    public get(id: number): ILabel {
        return this.labelsState.get(id);
    }

    public getAll(): ILabel[] {
        return this.labelsState.getAll();
    }

    public create(creationData: ILabelCreationDto): number {
        const createdItem = this.labelsState.create(creationData);

        return createdItem.id;
    }

    public edit(id: number, editingData: ILabelEditingDto): void {
        this.labelsState.edit(id, editingData);
    }

    public delete(id: number): void {
        this.labelsState.delete(id);
    }
}
