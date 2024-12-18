/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common.js";

export interface GameContractInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "owner"
      | "questSubmitDaily"
      | "questSubmitGame"
      | "questSubmitSocial"
      | "renounceOwnership"
      | "signerCheck"
      | "signerListAdd"
      | "signerListCheck"
      | "signerListRemove"
      | "signerTotal"
      | "transferOwnership"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "OwnershipTransferred"
      | "QuestCompleteDaily"
      | "QuestCompleteGame"
      | "QuestCompleteSocial"
      | "SignerListAdd"
      | "SignerListRemove"
  ): EventFragment;

  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "questSubmitDaily",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "questSubmitGame",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "questSubmitSocial",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "signerCheck",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "signerListAdd",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "signerListCheck",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "signerListRemove",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "signerTotal",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "questSubmitDaily",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "questSubmitGame",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "questSubmitSocial",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signerCheck",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signerListAdd",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signerListCheck",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signerListRemove",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "signerTotal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace QuestCompleteDailyEvent {
  export type InputTuple = [user: AddressLike, questName: BytesLike];
  export type OutputTuple = [user: string, questName: string];
  export interface OutputObject {
    user: string;
    questName: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace QuestCompleteGameEvent {
  export type InputTuple = [user: AddressLike, questName: BytesLike];
  export type OutputTuple = [user: string, questName: string];
  export interface OutputObject {
    user: string;
    questName: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace QuestCompleteSocialEvent {
  export type InputTuple = [user: AddressLike, questName: BytesLike];
  export type OutputTuple = [user: string, questName: string];
  export interface OutputObject {
    user: string;
    questName: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SignerListAddEvent {
  export type InputTuple = [
    totalAddedUser: BigNumberish,
    timestamp: BigNumberish
  ];
  export type OutputTuple = [totalAddedUser: bigint, timestamp: bigint];
  export interface OutputObject {
    totalAddedUser: bigint;
    timestamp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SignerListRemoveEvent {
  export type InputTuple = [
    totalAddedUser: BigNumberish,
    timestamp: BigNumberish
  ];
  export type OutputTuple = [totalAddedUser: bigint, timestamp: bigint];
  export interface OutputObject {
    totalAddedUser: bigint;
    timestamp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface GameContract extends BaseContract {
  connect(runner?: ContractRunner | null): GameContract;
  waitForDeployment(): Promise<this>;

  interface: GameContractInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  owner: TypedContractMethod<[], [string], "view">;

  questSubmitDaily: TypedContractMethod<
    [questName: BytesLike],
    [void],
    "nonpayable"
  >;

  questSubmitGame: TypedContractMethod<
    [questName: BytesLike],
    [void],
    "nonpayable"
  >;

  questSubmitSocial: TypedContractMethod<
    [questName: BytesLike],
    [void],
    "nonpayable"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  signerCheck: TypedContractMethod<
    [signerToCheck: AddressLike],
    [boolean],
    "view"
  >;

  signerListAdd: TypedContractMethod<
    [signerListToAdd: AddressLike[]],
    [void],
    "nonpayable"
  >;

  signerListCheck: TypedContractMethod<
    [signerListToCheck: AddressLike[]],
    [boolean[]],
    "view"
  >;

  signerListRemove: TypedContractMethod<
    [listSignerToRemove: AddressLike[]],
    [void],
    "nonpayable"
  >;

  signerTotal: TypedContractMethod<[], [bigint], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "questSubmitDaily"
  ): TypedContractMethod<[questName: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "questSubmitGame"
  ): TypedContractMethod<[questName: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "questSubmitSocial"
  ): TypedContractMethod<[questName: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "signerCheck"
  ): TypedContractMethod<[signerToCheck: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "signerListAdd"
  ): TypedContractMethod<
    [signerListToAdd: AddressLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "signerListCheck"
  ): TypedContractMethod<
    [signerListToCheck: AddressLike[]],
    [boolean[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "signerListRemove"
  ): TypedContractMethod<
    [listSignerToRemove: AddressLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "signerTotal"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "QuestCompleteDaily"
  ): TypedContractEvent<
    QuestCompleteDailyEvent.InputTuple,
    QuestCompleteDailyEvent.OutputTuple,
    QuestCompleteDailyEvent.OutputObject
  >;
  getEvent(
    key: "QuestCompleteGame"
  ): TypedContractEvent<
    QuestCompleteGameEvent.InputTuple,
    QuestCompleteGameEvent.OutputTuple,
    QuestCompleteGameEvent.OutputObject
  >;
  getEvent(
    key: "QuestCompleteSocial"
  ): TypedContractEvent<
    QuestCompleteSocialEvent.InputTuple,
    QuestCompleteSocialEvent.OutputTuple,
    QuestCompleteSocialEvent.OutputObject
  >;
  getEvent(
    key: "SignerListAdd"
  ): TypedContractEvent<
    SignerListAddEvent.InputTuple,
    SignerListAddEvent.OutputTuple,
    SignerListAddEvent.OutputObject
  >;
  getEvent(
    key: "SignerListRemove"
  ): TypedContractEvent<
    SignerListRemoveEvent.InputTuple,
    SignerListRemoveEvent.OutputTuple,
    SignerListRemoveEvent.OutputObject
  >;

  filters: {
    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "QuestCompleteDaily(address,bytes32)": TypedContractEvent<
      QuestCompleteDailyEvent.InputTuple,
      QuestCompleteDailyEvent.OutputTuple,
      QuestCompleteDailyEvent.OutputObject
    >;
    QuestCompleteDaily: TypedContractEvent<
      QuestCompleteDailyEvent.InputTuple,
      QuestCompleteDailyEvent.OutputTuple,
      QuestCompleteDailyEvent.OutputObject
    >;

    "QuestCompleteGame(address,bytes32)": TypedContractEvent<
      QuestCompleteGameEvent.InputTuple,
      QuestCompleteGameEvent.OutputTuple,
      QuestCompleteGameEvent.OutputObject
    >;
    QuestCompleteGame: TypedContractEvent<
      QuestCompleteGameEvent.InputTuple,
      QuestCompleteGameEvent.OutputTuple,
      QuestCompleteGameEvent.OutputObject
    >;

    "QuestCompleteSocial(address,bytes32)": TypedContractEvent<
      QuestCompleteSocialEvent.InputTuple,
      QuestCompleteSocialEvent.OutputTuple,
      QuestCompleteSocialEvent.OutputObject
    >;
    QuestCompleteSocial: TypedContractEvent<
      QuestCompleteSocialEvent.InputTuple,
      QuestCompleteSocialEvent.OutputTuple,
      QuestCompleteSocialEvent.OutputObject
    >;

    "SignerListAdd(uint256,uint256)": TypedContractEvent<
      SignerListAddEvent.InputTuple,
      SignerListAddEvent.OutputTuple,
      SignerListAddEvent.OutputObject
    >;
    SignerListAdd: TypedContractEvent<
      SignerListAddEvent.InputTuple,
      SignerListAddEvent.OutputTuple,
      SignerListAddEvent.OutputObject
    >;

    "SignerListRemove(uint256,uint256)": TypedContractEvent<
      SignerListRemoveEvent.InputTuple,
      SignerListRemoveEvent.OutputTuple,
      SignerListRemoveEvent.OutputObject
    >;
    SignerListRemove: TypedContractEvent<
      SignerListRemoveEvent.InputTuple,
      SignerListRemoveEvent.OutputTuple,
      SignerListRemoveEvent.OutputObject
    >;
  };
}
