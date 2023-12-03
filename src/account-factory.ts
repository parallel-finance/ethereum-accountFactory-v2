import { AccountCreated as AccountCreatedEvent } from "../generated/AccountFactory/AccountFactory"
import { AccountCreated } from "../generated/schema"

export function handleAccountCreated(event: AccountCreatedEvent): void {
  let entity = new AccountCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.salt = event.params.salt
  entity.accountAddress = event.params.accountAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
