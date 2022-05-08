export class RenCounter {

  constructor(
      readonly count: number,
  ) {}

  static create(): RenCounter {
    return new RenCounter(0)
  }

  public next(isCleared: boolean): RenCounter {
    if (isCleared) {
      return new RenCounter(this.count + 1)
    } else {
      return new RenCounter(0)
    }
  }
}
