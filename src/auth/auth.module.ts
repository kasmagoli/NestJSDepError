import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CouponsModule } from 'src/coupons/coupons.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [CouponsModule, forwardRef(() => UsersModule)],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
