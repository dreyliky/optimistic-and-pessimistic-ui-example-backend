import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ILabel, ILabelCreationDto, ILabelEditingDto } from '../interfaces';
import { LabelsService } from '../services';

@Controller('labels')
export class LabelsController {
    constructor(
        private readonly labelsService: LabelsService
    ) {}

    @Get(':id')
    public get(
        @Param('id') id: string
    ): ILabel {
        return this.labelsService.get(+id);
    }

    @Get()
    public getAll(): ILabel[] {
        return this.labelsService.getAll();
    }

    @Post()
    public create(
        @Body() creationData: ILabelCreationDto
    ): number {
        return this.labelsService.create(creationData);
    }

    @Put(':id')
    public edit(
        @Param('id') id: string,
        @Body() editingData: ILabelEditingDto
    ): void {
        this.labelsService.edit(+id, editingData);
    }

    @Delete(':id')
    public delete(
        @Param('id') id: string
    ): void {
        this.labelsService.delete(+id);
    }
}
