import { forwardRef, Module } from '@nestjs/common';
import { CouponsService } from './coupons.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [forwardRef(() => UsersModule)],
  providers: [CouponsService],
  exports: [CouponsService],
})
export class CouponsModule {}
