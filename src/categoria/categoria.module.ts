import { Module } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaController } from './categoria.controller';

@Module({
  imports:[],
  controllers: [CategoriaController],
  providers: [CategoriaService]
})
export class CategoriaModule {}
