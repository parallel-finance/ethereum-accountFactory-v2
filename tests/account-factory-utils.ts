import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { AccountCreated } from "../generated/AccountFactory/AccountFactory"

export function createAccountCreatedEvent(
  owner: Address,
  salt: BigInt,
  accountAddress: Address
): AccountCreated {
  let accountCreatedEvent = changetype<AccountCreated>(newMockEvent())

  accountCreatedEvent.parameters = new Array()

  accountCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  accountCreatedEvent.parameters.push(
    new ethereum.EventParam("salt", ethereum.Value.fromUnsignedBigInt(salt))
  )
  accountCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "accountAddress",
      ethereum.Value.fromAddress(accountAddress)
    )
  )

  return accountCreatedEvent
}
