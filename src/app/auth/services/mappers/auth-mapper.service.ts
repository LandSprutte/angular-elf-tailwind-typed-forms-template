import { Injectable } from '@angular/core';
import { UserDTO } from 'src/app/api-proxies/auth-proxy/auth-proxy.model';
import { MapperService } from 'src/app/shared/utils/abstract-mapper-service';
import { User } from '../api/auth-api.service';

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
