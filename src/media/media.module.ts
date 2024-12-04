import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { MediaService } from './media.service';

@Module({
  imports: [UsersModule],
  providers: [MediaService],
  exports: [MediaService],
})
export class MediaModule {}
