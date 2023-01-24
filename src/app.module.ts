import { Module } from '@nestjs/common';
import { LabelsController } from './controllers/labels.controller';
import { LabelsService } from './services/labels.service';
import { LabelsState } from './states';

@Module({
    controllers: [
        LabelsController
    ],
    providers: [
        LabelsService,
        LabelsState
    ]
})
export class AppModule {}
