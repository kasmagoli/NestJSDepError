import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { AddressesService } from 'src/addresses/addresses.service';
import { CouponsService } from 'src/coupons/coupons.service';
import { MediaService } from 'src/media/media.service';
import { PricesService } from 'src/prices/prices.service';
import { UsersService } from './users.service';

@Injectable()
export class CreatorsService {
  constructor(
    private readonly usersService: UsersService,
    private readonly mediaService: MediaService,
    private readonly priceService: PricesService,
    private readonly addressesService: AddressesService,
    @Inject(forwardRef(() => CouponsService))
    private readonly couponsService: CouponsService,
  ) {}
}
