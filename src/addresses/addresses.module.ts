import { forwardRef, Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AddressesService } from './addresses.service';

@Module({
  imports: [forwardRef(() => UsersModule)],
  providers: [AddressesService],
  exports: [AddressesService],
})
export class AddressesModule {}
