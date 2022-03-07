export abstract class MapperService<TFrom, TTo> {
  abstract fromDto(dto: TFrom): TTo;
  abstract toDto(entity: TTo): TFrom;
}
