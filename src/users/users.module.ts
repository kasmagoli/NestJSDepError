import { forwardRef, Module } from '@nestjs/common';
import { CouponsModule } from 'src/coupons/coupons.module';
import { AuthModule } from 'src/auth/auth.module';
import { MediaModule } from 'src/media/media.module';
import { PricesModule } from 'src/prices/prices.module';
import { CreatorsService } from './creators.service';
import { AddressesModule } from 'src/addresses/addresses.module';
import { UsersService } from './users.service';

@Module({
  imports: [
    forwardRef(() => MediaModule),
    forwardRef(() => AddressesModule),
    forwardRef(() => PricesModule),
    forwardRef(() => CouponsModule),
    forwardRef(() => AuthModule),
  ],
  providers: [CreatorsService, UsersService],
  exports: [CreatorsService, UsersService],
})
export class UsersModule {}
