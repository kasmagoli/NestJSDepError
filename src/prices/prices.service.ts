import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PricesService {
  constructor(private readonly usersService: UsersService) {}
}
