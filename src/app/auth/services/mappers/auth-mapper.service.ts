import { Injectable } from '@angular/core';
import { UserDTO } from 'src/app/api-proxies/auth-proxy/auth-proxy.model';
import { User } from '../api/auth-api.service';

export abstract class MapperService<TFrom, TTo> {
  abstract fromDto(dto: TFrom): TTo;
  abstract toDto(entity: TTo): TFrom;
}

@Injectable()
export class AuthMapperService extends MapperService<UserDTO, User> {
  fromDto(dto: UserDTO): User {
    return {
      name: dto.name,
      id: dto.id,
    };
  }
  toDto(entity: User): UserDTO {
    return {
      name: entity.name,
      id: entity.id,
    };
  }
}
