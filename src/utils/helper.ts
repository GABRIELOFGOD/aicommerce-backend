import { SelectQueryBuilder } from "typeorm";

export class FilteredQuery<T> {
  constructor(
    private readonly query: SelectQueryBuilder<T>,
  ) {}

  byField(field: string, value: string, like = false) {
    if (like) {
      this.query.andWhere(
        `LOWER(${field}) LIKE LOWER(:value)`,
        { value: `%${value}%` },
      );
    } else {
      this.query.andWhere(
        `${field} = :value`,
        { value },
      );
    }

    return this;
  }

  build() {
    return this.query;
  }
}
