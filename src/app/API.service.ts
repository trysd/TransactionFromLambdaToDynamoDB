/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateShipInput = {
  id?: string | null;
  title: string;
  capacity: number;
  registered: number;
  createdAt?: number | null;
};

export type ModelShipConditionInput = {
  title?: ModelStringInput | null;
  capacity?: ModelIntInput | null;
  registered?: ModelIntInput | null;
  createdAt?: ModelIntInput | null;
  and?: Array<ModelShipConditionInput | null> | null;
  or?: Array<ModelShipConditionInput | null> | null;
  not?: ModelShipConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateShipInput = {
  id: string;
  title?: string | null;
  capacity?: number | null;
  registered?: number | null;
  createdAt?: number | null;
};

export type DeleteShipInput = {
  id?: string | null;
};

export type CreateCrewInput = {
  id?: string | null;
  name: string;
  shipID: string;
  createdAt?: number | null;
};

export type ModelCrewConditionInput = {
  name?: ModelStringInput | null;
  shipID?: ModelIDInput | null;
  createdAt?: ModelIntInput | null;
  and?: Array<ModelCrewConditionInput | null> | null;
  or?: Array<ModelCrewConditionInput | null> | null;
  not?: ModelCrewConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateCrewInput = {
  id: string;
  name?: string | null;
  shipID?: string | null;
  createdAt?: number | null;
};

export type DeleteCrewInput = {
  id?: string | null;
};

export type ModelShipFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  capacity?: ModelIntInput | null;
  registered?: ModelIntInput | null;
  createdAt?: ModelIntInput | null;
  and?: Array<ModelShipFilterInput | null> | null;
  or?: Array<ModelShipFilterInput | null> | null;
  not?: ModelShipFilterInput | null;
};

export type ModelCrewFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  shipID?: ModelIDInput | null;
  createdAt?: ModelIntInput | null;
  and?: Array<ModelCrewFilterInput | null> | null;
  or?: Array<ModelCrewFilterInput | null> | null;
  not?: ModelCrewFilterInput | null;
};

export type CreateShipMutation = {
  __typename: "Ship";
  id: string;
  title: string;
  capacity: number;
  registered: number;
  crews: {
    __typename: "ModelCrewConnection";
    items: Array<{
      __typename: "Crew";
      id: string;
      name: string;
      shipID: string;
      createdAt: number | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number | null;
  updatedAt: string;
};

export type UpdateShipMutation = {
  __typename: "Ship";
  id: string;
  title: string;
  capacity: number;
  registered: number;
  crews: {
    __typename: "ModelCrewConnection";
    items: Array<{
      __typename: "Crew";
      id: string;
      name: string;
      shipID: string;
      createdAt: number | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number | null;
  updatedAt: string;
};

export type DeleteShipMutation = {
  __typename: "Ship";
  id: string;
  title: string;
  capacity: number;
  registered: number;
  crews: {
    __typename: "ModelCrewConnection";
    items: Array<{
      __typename: "Crew";
      id: string;
      name: string;
      shipID: string;
      createdAt: number | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number | null;
  updatedAt: string;
};

export type CreateCrewMutation = {
  __typename: "Crew";
  id: string;
  name: string;
  shipID: string;
  ship: {
    __typename: "Ship";
    id: string;
    title: string;
    capacity: number;
    registered: number;
    crews: {
      __typename: "ModelCrewConnection";
      nextToken: string | null;
    } | null;
    createdAt: number | null;
    updatedAt: string;
  } | null;
  createdAt: number | null;
  updatedAt: string;
};

export type UpdateCrewMutation = {
  __typename: "Crew";
  id: string;
  name: string;
  shipID: string;
  ship: {
    __typename: "Ship";
    id: string;
    title: string;
    capacity: number;
    registered: number;
    crews: {
      __typename: "ModelCrewConnection";
      nextToken: string | null;
    } | null;
    createdAt: number | null;
    updatedAt: string;
  } | null;
  createdAt: number | null;
  updatedAt: string;
};

export type DeleteCrewMutation = {
  __typename: "Crew";
  id: string;
  name: string;
  shipID: string;
  ship: {
    __typename: "Ship";
    id: string;
    title: string;
    capacity: number;
    registered: number;
    crews: {
      __typename: "ModelCrewConnection";
      nextToken: string | null;
    } | null;
    createdAt: number | null;
    updatedAt: string;
  } | null;
  createdAt: number | null;
  updatedAt: string;
};

export type EchoQuery = {
  __typename: "ResponceEcho";
  status: number | null;
  body: string | null;
};

export type GetShipQuery = {
  __typename: "Ship";
  id: string;
  title: string;
  capacity: number;
  registered: number;
  crews: {
    __typename: "ModelCrewConnection";
    items: Array<{
      __typename: "Crew";
      id: string;
      name: string;
      shipID: string;
      createdAt: number | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number | null;
  updatedAt: string;
};

export type ListShipsQuery = {
  __typename: "ModelShipConnection";
  items: Array<{
    __typename: "Ship";
    id: string;
    title: string;
    capacity: number;
    registered: number;
    crews: {
      __typename: "ModelCrewConnection";
      nextToken: string | null;
    } | null;
    createdAt: number | null;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetCrewQuery = {
  __typename: "Crew";
  id: string;
  name: string;
  shipID: string;
  ship: {
    __typename: "Ship";
    id: string;
    title: string;
    capacity: number;
    registered: number;
    crews: {
      __typename: "ModelCrewConnection";
      nextToken: string | null;
    } | null;
    createdAt: number | null;
    updatedAt: string;
  } | null;
  createdAt: number | null;
  updatedAt: string;
};

export type ListCrewsQuery = {
  __typename: "ModelCrewConnection";
  items: Array<{
    __typename: "Crew";
    id: string;
    name: string;
    shipID: string;
    ship: {
      __typename: "Ship";
      id: string;
      title: string;
      capacity: number;
      registered: number;
      createdAt: number | null;
      updatedAt: string;
    } | null;
    createdAt: number | null;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateShipSubscription = {
  __typename: "Ship";
  id: string;
  title: string;
  capacity: number;
  registered: number;
  crews: {
    __typename: "ModelCrewConnection";
    items: Array<{
      __typename: "Crew";
      id: string;
      name: string;
      shipID: string;
      createdAt: number | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number | null;
  updatedAt: string;
};

export type OnUpdateShipSubscription = {
  __typename: "Ship";
  id: string;
  title: string;
  capacity: number;
  registered: number;
  crews: {
    __typename: "ModelCrewConnection";
    items: Array<{
      __typename: "Crew";
      id: string;
      name: string;
      shipID: string;
      createdAt: number | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number | null;
  updatedAt: string;
};

export type OnDeleteShipSubscription = {
  __typename: "Ship";
  id: string;
  title: string;
  capacity: number;
  registered: number;
  crews: {
    __typename: "ModelCrewConnection";
    items: Array<{
      __typename: "Crew";
      id: string;
      name: string;
      shipID: string;
      createdAt: number | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: number | null;
  updatedAt: string;
};

export type OnCreateCrewSubscription = {
  __typename: "Crew";
  id: string;
  name: string;
  shipID: string;
  ship: {
    __typename: "Ship";
    id: string;
    title: string;
    capacity: number;
    registered: number;
    crews: {
      __typename: "ModelCrewConnection";
      nextToken: string | null;
    } | null;
    createdAt: number | null;
    updatedAt: string;
  } | null;
  createdAt: number | null;
  updatedAt: string;
};

export type OnUpdateCrewSubscription = {
  __typename: "Crew";
  id: string;
  name: string;
  shipID: string;
  ship: {
    __typename: "Ship";
    id: string;
    title: string;
    capacity: number;
    registered: number;
    crews: {
      __typename: "ModelCrewConnection";
      nextToken: string | null;
    } | null;
    createdAt: number | null;
    updatedAt: string;
  } | null;
  createdAt: number | null;
  updatedAt: string;
};

export type OnDeleteCrewSubscription = {
  __typename: "Crew";
  id: string;
  name: string;
  shipID: string;
  ship: {
    __typename: "Ship";
    id: string;
    title: string;
    capacity: number;
    registered: number;
    crews: {
      __typename: "ModelCrewConnection";
      nextToken: string | null;
    } | null;
    createdAt: number | null;
    updatedAt: string;
  } | null;
  createdAt: number | null;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateShip(
    input: CreateShipInput,
    condition?: ModelShipConditionInput
  ): Promise<CreateShipMutation> {
    const statement = `mutation CreateShip($input: CreateShipInput!, $condition: ModelShipConditionInput) {
        createShip(input: $input, condition: $condition) {
          __typename
          id
          title
          capacity
          registered
          crews {
            __typename
            items {
              __typename
              id
              name
              shipID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateShipMutation>response.data.createShip;
  }
  async UpdateShip(
    input: UpdateShipInput,
    condition?: ModelShipConditionInput
  ): Promise<UpdateShipMutation> {
    const statement = `mutation UpdateShip($input: UpdateShipInput!, $condition: ModelShipConditionInput) {
        updateShip(input: $input, condition: $condition) {
          __typename
          id
          title
          capacity
          registered
          crews {
            __typename
            items {
              __typename
              id
              name
              shipID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateShipMutation>response.data.updateShip;
  }
  async DeleteShip(
    input: DeleteShipInput,
    condition?: ModelShipConditionInput
  ): Promise<DeleteShipMutation> {
    const statement = `mutation DeleteShip($input: DeleteShipInput!, $condition: ModelShipConditionInput) {
        deleteShip(input: $input, condition: $condition) {
          __typename
          id
          title
          capacity
          registered
          crews {
            __typename
            items {
              __typename
              id
              name
              shipID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteShipMutation>response.data.deleteShip;
  }
  async CreateCrew(
    input: CreateCrewInput,
    condition?: ModelCrewConditionInput
  ): Promise<CreateCrewMutation> {
    const statement = `mutation CreateCrew($input: CreateCrewInput!, $condition: ModelCrewConditionInput) {
        createCrew(input: $input, condition: $condition) {
          __typename
          id
          name
          shipID
          ship {
            __typename
            id
            title
            capacity
            registered
            crews {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCrewMutation>response.data.createCrew;
  }
  async UpdateCrew(
    input: UpdateCrewInput,
    condition?: ModelCrewConditionInput
  ): Promise<UpdateCrewMutation> {
    const statement = `mutation UpdateCrew($input: UpdateCrewInput!, $condition: ModelCrewConditionInput) {
        updateCrew(input: $input, condition: $condition) {
          __typename
          id
          name
          shipID
          ship {
            __typename
            id
            title
            capacity
            registered
            crews {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCrewMutation>response.data.updateCrew;
  }
  async DeleteCrew(
    input: DeleteCrewInput,
    condition?: ModelCrewConditionInput
  ): Promise<DeleteCrewMutation> {
    const statement = `mutation DeleteCrew($input: DeleteCrewInput!, $condition: ModelCrewConditionInput) {
        deleteCrew(input: $input, condition: $condition) {
          __typename
          id
          name
          shipID
          ship {
            __typename
            id
            title
            capacity
            registered
            crews {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCrewMutation>response.data.deleteCrew;
  }
  async Echo(message?: string): Promise<EchoQuery> {
    const statement = `query Echo($message: String) {
        echo(message: $message) {
          __typename
          status
          body
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (message) {
      gqlAPIServiceArguments.message = message;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <EchoQuery>response.data.echo;
  }
  async GetShip(id: string): Promise<GetShipQuery> {
    const statement = `query GetShip($id: ID!) {
        getShip(id: $id) {
          __typename
          id
          title
          capacity
          registered
          crews {
            __typename
            items {
              __typename
              id
              name
              shipID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetShipQuery>response.data.getShip;
  }
  async ListShips(
    filter?: ModelShipFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListShipsQuery> {
    const statement = `query ListShips($filter: ModelShipFilterInput, $limit: Int, $nextToken: String) {
        listShips(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            capacity
            registered
            crews {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListShipsQuery>response.data.listShips;
  }
  async GetCrew(id: string): Promise<GetCrewQuery> {
    const statement = `query GetCrew($id: ID!) {
        getCrew(id: $id) {
          __typename
          id
          name
          shipID
          ship {
            __typename
            id
            title
            capacity
            registered
            crews {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCrewQuery>response.data.getCrew;
  }
  async ListCrews(
    filter?: ModelCrewFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCrewsQuery> {
    const statement = `query ListCrews($filter: ModelCrewFilterInput, $limit: Int, $nextToken: String) {
        listCrews(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            shipID
            ship {
              __typename
              id
              title
              capacity
              registered
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCrewsQuery>response.data.listCrews;
  }
  OnCreateShipListener: Observable<
    SubscriptionResponse<OnCreateShipSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateShip {
        onCreateShip {
          __typename
          id
          title
          capacity
          registered
          crews {
            __typename
            items {
              __typename
              id
              name
              shipID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateShipSubscription>>;

  OnUpdateShipListener: Observable<
    SubscriptionResponse<OnUpdateShipSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateShip {
        onUpdateShip {
          __typename
          id
          title
          capacity
          registered
          crews {
            __typename
            items {
              __typename
              id
              name
              shipID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateShipSubscription>>;

  OnDeleteShipListener: Observable<
    SubscriptionResponse<OnDeleteShipSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteShip {
        onDeleteShip {
          __typename
          id
          title
          capacity
          registered
          crews {
            __typename
            items {
              __typename
              id
              name
              shipID
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteShipSubscription>>;

  OnCreateCrewListener: Observable<
    SubscriptionResponse<OnCreateCrewSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCrew {
        onCreateCrew {
          __typename
          id
          name
          shipID
          ship {
            __typename
            id
            title
            capacity
            registered
            crews {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCrewSubscription>>;

  OnUpdateCrewListener: Observable<
    SubscriptionResponse<OnUpdateCrewSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCrew {
        onUpdateCrew {
          __typename
          id
          name
          shipID
          ship {
            __typename
            id
            title
            capacity
            registered
            crews {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCrewSubscription>>;

  OnDeleteCrewListener: Observable<
    SubscriptionResponse<OnDeleteCrewSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCrew {
        onDeleteCrew {
          __typename
          id
          name
          shipID
          ship {
            __typename
            id
            title
            capacity
            registered
            crews {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCrewSubscription>>;
}
