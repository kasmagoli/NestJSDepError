import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AddressesService {
  constructor(private readonly usersService: UsersService) {}
}
