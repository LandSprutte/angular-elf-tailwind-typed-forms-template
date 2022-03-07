import { Injectable } from '@angular/core';
import { SalesOrderDTO } from 'src/app/api-proxies/sales-order-proxy/sales-order-proxy.models';
import { MapperService } from 'src/app/shared/utils/abstract-mapper-service';

export type SalesOrder = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  price: number;
  name: string;
  description: string;
};

@Injectable()
export class SalesOrderMapperService
  implements MapperService<SalesOrderDTO, SalesOrder>
{
  constructor() {}

  fromDto(dto: SalesOrderDTO): SalesOrder {
    return {
      id: dto.id,
      createdAt: new Date(dto.createdAt),
      updatedAt: new Date(dto.updatedAt),
      price: dto.price,
      name: dto.name,
      description: dto.description,
    };
  }
  toDto(entity: SalesOrder): SalesOrderDTO {
    return {
      id: entity.id,
      createdAt: entity.createdAt.toISOString(),
      updatedAt: entity.updatedAt.toISOString(),
      price: entity.price,
      name: entity.name,
      description: entity.description,
    };
  }
}
