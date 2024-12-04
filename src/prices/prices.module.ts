import { Module } from '@nestjs/common';
import { MediaModule } from 'src/media/media.module';
import { PricesService } from './prices.service';

@Module({
  imports: [MediaModule],
  providers: [PricesService],
  exports: [PricesService],
})
export class PricesModule {}
