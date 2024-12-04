import { Module } from '@nestjs/common';
import { PricesModule } from 'src/prices/prices.module';
import { UsersService } from './users.service';

@Module({
  imports: [PricesModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
