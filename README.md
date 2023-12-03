# Subgraph ethereum-accountFactory-v2

Query all AA accounts created by the `AccountFactory: 0x09B33A99B954e52907c61514B6f8cD37De71076f` on the ethereum.

This subgraph is based on the Alchemy Subgraph service.

## Deployment information

<https://ipfs.satsuma.xyz/ipfs/QmZ66ZdDAEP1n2npmX6vXtmTRZtsjmBJYqm2oQfVgNLjxt>

```text
dataSources:
  - kind: ethereum
    mapping:
      abis:
        - file:
            /: /ipfs/QmeZYg6Aes17MNxTYPcantaEb83Yx7TqpqCUH31HMUnjjT
          name: AccountFactory
      apiVersion: 0.0.7
      entities:
        - AccountCreated
      eventHandlers:
        - event: 'AccountCreated(indexed address,uint256,address)'
          handler: handleAccountCreated
      file:
        /: /ipfs/QmWRs2dudJQNEkAbWjKWeyJzHKjGTk2xjXhWR8RFHMne6Y
      kind: ethereum/events
      language: wasm/assemblyscript
    name: AccountFactory
    network: mainnet
    source:
      abi: AccountFactory
      address: '0x09B33A99B954e52907c61514B6f8cD37De71076f'
      startBlock: 18039713
schema:
  file:
    /: /ipfs/QmTyxr7KQAUHFmPJ9WUpHqydN1zURYBJVkwU7y74fYhjaj
specVersion: 0.0.5
```

## Usage

### Endpoint

`https://subgraph.satsuma-prod.com/48lhjzpygglemp7hlh71l6/ethereum-accountFactory-v2/api`

### Query

```gql
// Query
query AccountCreateds($orderBy: AccountCreated_orderBy, $orderDirection: OrderDirection, $where: AccountCreated_filter) {
  accountCreateds(orderBy: $orderBy, orderDirection: $orderDirection, where: $where) {
    accountAddress
    blockNumber
    blockTimestamp
    owner
    salt
    transactionHash
  }
}

// Variables
{
  "orderBy": "blockNumber",
  "orderDirection": "desc",
  "where": {
    "owner": "your eoa owner address"
  }
}
```
