export class Order {
  constructor(id, idBuyer, idSellpoint, total, totalQuantity, detail) {
    this.id = id
    this.idBuyer = idBuyer
    this.idSellpoint = idSellpoint
    this.total = total
    this.totalQuantity = totalQuantity
    this.detail = detail
  }
}
