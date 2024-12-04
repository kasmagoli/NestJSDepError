import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { MediaService } from 'src/media/media.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => MediaService))
    private readonly mediaService: MediaService,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
}
