import { forwardRef, Module } from '@nestjs/common';
import { PricesService } from './prices.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [forwardRef(() => UsersModule)],
  providers: [PricesService],
  exports: [PricesService],
})
export class PricesModule {}
