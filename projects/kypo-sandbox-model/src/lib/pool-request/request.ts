/**
 * Class representing pool request
 */
export abstract class Request {
  id: number;
  allocationUnitId: number;
  createdAt: Date;
  readonly type: string;

  protected constructor(type: string) {
    this.type = type;
  }
}
