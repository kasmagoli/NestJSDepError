import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CouponsService } from 'src/coupons/coupons.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    private readonly couponsService: CouponsService,
  ) {}
}
