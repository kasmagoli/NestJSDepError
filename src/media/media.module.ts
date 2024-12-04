import { forwardRef, Module } from '@nestjs/common';
import { MediaService } from './media/media.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [forwardRef(() => UsersModule)],
  providers: [MediaService],
  exports: [MediaService],
})
export class MediaModule {}
