import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreatorsService } from 'src/users/creators.service';

@Injectable()
export class CouponsService {
  constructor(
    @Inject(forwardRef(() => CreatorsService))
    private readonly creatorsService: CreatorsService,
  ) {}
}
