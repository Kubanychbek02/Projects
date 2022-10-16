declare interface Option {
  value: string
  label: string
}

declare interface UnsignedPackage {
  address: string | null
  aymak: string | null
  aymakId: string | null
  birthdate: Date | string | null
  building: string | null
  carBrand: string | null
  carColor: string | null
  carModel: string | null
  carYear: string | null
  certificate: string | null
  certificateDate: Date | string | null
  citizenship: string | null
  citizenshipId: number | null
  complexType: number | null
  complexTypeName: string | null
  crossroadId: number | null
  dcComplexType: string | null
  dcCrossroad: string | null
  dcDirection: string | null
  dcManager: string | null
  dcSerial: string | null
  dcVendor: string | null
  dcViolationList: string | null
  deliveryDate: Date | string | null
  deliveryNote: Date | string | null
  deliveryStatus: number | null
  deliveryUpdateDate: Date | string | null
  deviceName: string | null
  deviceSerial: string | null
  direction: number | null
  eni: string | null
  ernSendDate: Date | string | null
  fileName: string | null
  firstname: string | null
  flat: string | null
  foreigner: string | null
  gpsX: string | null
  gpsY: string | null
  house: string | null
  id: number
  imageBase64: string | null
  lastname: string | null
  managerCertExpiredate: Date | string | null
  managerCertIssuedate: Date | string | null
  managerCertificate: string | null
  managerId: number | null
  managerQueueDate: Date | string | null
  managerSignDate: Date | string | null
  obl: string | null
  oblId: number | null
  operatorId: number | null
  operatorQueueDate: Date | string | null
  operatorVerifyDate: string | null
  ownerType: number | null
  patronymic: string | null
  pausedDate: Date | string | null
  pausedOperator: string | null
  pausedStatus: string | null
  paymentDate: Date | string | null
  paymentFrom: string | null
  paymentNumber: number | null
  paymentStatus: number | null
  pddType: string | null
  photo: string | null
  pin: string | null
  plateNumber: string | null
  postIndex: string | null
  postSendDate: Date | string | null
  protocolDate: Date | string | null
  protocolHash: string | null
  protocolNumber: number | null
  protocolReturn: string | null
  protocolReturnDate: Date | string | null
  protocolReturnReason: string | null
  protocolStatus: number | null
  raion: string | null
  raionId: number | null
  signedHash: string | null
  speed: number | null
  speedThreshold: string | null
  street: string | null
  streetId: number | null
  user: string | null
  vendor: number | null
  videoFile: string | null
  village: string | null
  villageId: number | null
  violationAmmount: number | null
  violationArticle: number | string | null
  violationCode: number | null
  violationDate: Date | string | null
  violationFix: string | null
  violationPlace: string | null
  violationSaveDate: Date | string | null
  violationType: number | string | null
}

declare interface UnsignedProtocol {
  address: string
  aymak: string
  aymakId: number
  birthdate: Date | string
  building: string
  carBrand: string
  carColor: string
  carModel: string
  carYear: string
  certificate: string
  certificateDate: Date | string
  citizenship: string
  citizenshipId: number
  complexType: number
  complexTypeName: string
  crossroadId: number
  dcComplexType: {id: number; complexType: string}
  dcCrossroad: {id: number; crossroadName: string; crossroadCode: string}
  dcDirection: string | null
  dcManager: string | null
  dcSerial: string | null
  dcVendor: string | null
  dcViolationList: {
    violationCode: number
    violationName: string
    violationArticle: string
  }
  deliveryDate: Date | string | null
  deliveryNote: string | null
  deliveryStatus: number | null
  deliveryUpdateDate: Date | string | null
  deviceName: string
  deviceSerial: string
  direction: number
  eni: string | null
  ernSendDate: Date | string | null
  fileName: string
  firstname: string
  flat: string
  foreigner: string | null
  gpsX: string
  gpsY: string
  house: string
  id: number
  imageBase64: string
  lastname: string
  managerCertExpiredate: Date | string | null
  managerCertIssuedate: Date | string | null
  managerCertificate: string | null
  managerId: number
  managerQueueDate: Date | string | null
  managerSignDate: Date | string | null
  obl: string | null
  oblId: number
  operatorId: number
  operatorQueueDate: Date | string | null
  operatorVerifyDate: Date | string | null
  ownerType: number
  patronymic: string
  pausedDate: Date | string | null
  pausedOperator: string | null
  pausedStatus: string | null
  paymentDate: Date | string | null
  paymentFrom: string | null
  paymentNumber: number | string | null
  paymentStatus: number | null
  pddType: string
  photo: string
  pin: string
  plateNumber: string
  postIndex: string | null
  postSendDate: Date | string | null
  protocolDate: Date | string | null
  protocolHash: string | null
  protocolNumber: number | null
  protocolReturn: string | null
  protocolReturnDate: Date | string | null
  protocolReturnReason: string | null
  protocolStatus: number | null
  raion: string
  raionId: number | null
  signedHash: string | null
  speed: number | null
  speedThreshold: number | null
  street: string
  streetId: number | null
  user: {id: number; passwordHash: string}
  vendor: number | null
  videoFile: string | null
  village: string | null
  villageId: number | null
  violationAmmount: number | null
  violationArticle: string
  violationCode: number | null
  violationDate: Date | string | null
  violationFix: string | null
  violationPlace: string | null
  violationSaveDate: Date | string | null
  violationType: string | null
}

declare interface Penalties {
  address: string
  aymak: string
  aymakId: number | string
  birthdate: string
  building: string
  calculatedAmmount: number | string
  carBrand: string
  carColor: string
  carModel: string
  carYear: string
  certificate: string
  certificateDate: string
  complexType: number | string
  complexTypeName: string
  crossroadId: number | string
  crossroadName: string
  deliveryStatusText: string
  deviceName: string
  deviceSerial: string
  direction: number | string
  fileName: string
  firstname: string
  flat: string
  gpsX: string
  gpsY: string
  house: string
  id: number
  imageBase64?: string | null
  judgementStatusText?: string | null
  lastname: string
  managerFio: string
  obl?: string | null
  oblId: number | string
  ownerType: number
  patronymic: string
  paymentDate: Date | string | null
  paymentFrom?: string | null
  paymentNumber: number | string
  paymentStatus: number | string
  paymentStatusText: string
  pddType: string
  penaltyCreateDate: string
  penaltyDeliveryDate: Date | string | null
  penaltyDeliveryNote: string | null
  penaltyDeliveryStatus: number | string
  penaltyDeliveryUpdateDate: Date | string | null
  penaltyErnSendDate: Date | string | null
  penaltyHash: string
  penaltyJudgement: string | null
  penaltyJudgementDate: Date | string | null
  penaltyJudgementReason: string | null
  penaltyManagerId: number | string
  penaltyManagerQueueDate: Date | string | null
  penaltyManagerSignDate: Date | string | null
  penaltyNumber: number | string
  penaltyPostSendDate: Date | string | null
  penaltySignedHash: string
  penaltyStatus: string | number
  photo: string | null
  pin: string
  plateNumber: string
  printDate: Date | string | null
  printStatus: boolean
  protocolManagerSignDate: Date | string | null
  protocolNumber: number | string
  raion: string
  raionId: number | string
  speed: number | string
  speedThreshold: number | string
  street: string
  streetId: string | number
  vendor: string | number
  videoFile: string
  village: string
  villageId: string | number
  violationArticle: string
  violationArticlePart: string
  violationCode: string
  violationDate: string
  violationId: number
  violationProtocolName: string
  violationSaveDate: string
}

declare interface Violations {
  cancelDate?: Date | string | null
  cancelReason?: string | null
  cancelReasonId?: number | string | null
  cancelUser?: string | null
  canceledId?: number | string | null
  carBrand?: string | null
  carColor?: string | null
  carModel?: string | null
  carYear?: string | null
  certificate?: string | null
  certificateDate?: Date | string | null
  complexType?: string | number | null
  complexTypeName?: string | number | null
  crossroadId?: number | string | null
  dcComplexType?: number | string | null
  dcCrossroad?: {id: number; crossroadName: string; crossroadCode: string}
  dcDirection?: string | null
  dcPausedStatus?: string | null
  dcRecognize?: string | null
  dcVendor?: string | null
  dcViolationList?: {
    violationCode: number
    violationName: string
    violationArticle: string
  }
  dcViolationStatus?: string | null
  deviceName?: string | null
  deviceSerial?: Date | string | null
  direction?: number | string | null
  fileName?: string
  foreignerProtocol?: string | null
  gpsX?: string | null
  gpsY?: string | null
  id: number
  imageBase64?: string
  operatorId?: number | null
  operatorQueueDate?: Date | string | null
  pausedDate?: Date | string | null
  pausedOperator?: string | null
  pausedStatus?: string | null
  pddType?: string | null
  plateNumber?: string
  protocolArchive?: string | null
  protocolForeigner?: string | null
  protocolForeignersId?: string | number | null
  protocolPaused?: string | null
  protocolPausedId?: string | number | null
  protocolResumed?: string | null
  protocolResumedId?: string | number | null
  protocolStoped?: string | null
  protocolStopedId?: string | null
  recognizeStatus?: number | null
  recognizeThreshold?: number | null
  resumeStatus?: string | null
  saveDate: Date | string | null
  sendDate: Date | string | null
  speed: number | string | null
  speedThreshold: number | null
  ticketName: string | null
  user: string | null
  vendor: number | null
  videoFile: string | null
  violationAmmount: number | null
  violationArticle: string | null
  violationCode: number | null
  violationDate: Date | string | null
  violationPlace: string | null
  violationStatus: number | null
  violationType: string | null
  wanted: string | null
}

declare interface Protocol {
  address?: string | null
  aymak?: string | null
  aymakId?: null
  birthdate?: Date | string | null
  brand?: string | null
  building?: string | null
  carColor?: string | null
  carYear?: Date | string | null
  certificate?: string | null
  certificateDate?: Date | string | null
  complexType?: number | null
  complexTypeName?: string | null
  crossroadId?: number | null
  direction?: number | null
  eni?: string | null
  ernSendDate?: Date | string | null
  fileName?: string | null
  flat?: string | null
  govplate?: string | null
  gpsX?: string | null
  gpsY?: string | null
  house?: string | null
  id: number
  model?: string | null
  name: string | null
  obl: string | null
  oblId: number | null
  operatorQueueDate: Date | string | null
  orgName: string | null
  ownerType: number | null
  patronymic: string | null
  pddType: string | null
  photo: string | null
  pin: string | null
  postIndex: string | null
  postSendDate: Date | string | null
  raion: string | null
  raionId: number | null
  resumeStatus: string | null
  saveDate: Date | string | null
  speed: number | null
  speedThreshold: number | null
  stopRegistration: boolean
  street: string | null
  streetId: number | null
  surname: string | null
  videoFile: string | null
  village: string | null
  villageId: number | null
  violamount: number | null
  violationArticle: string
  violationCode: number | string
  violationDate: Date | string | null
  violationFix: string | null
  violationName: string
  violationPhoto: string | null
  violationPlace: string | null
}

declare interface CarInfo {
  code: number
  message: string
  protocol: Protocol
}

declare type CancelReason = {
  id: number
  cancelReason: string
  cancelType: number
}

declare type ViolationModuleProcessingType = {
  pin?: string
  name?: string
  inspector?: string
  inspectorSignDate?: Date | string | null
  surname?: string
  patronymic?: string
  photo?: string | null
  birthdate?: Date | string
  address?: string
  citizenship?: string
  violationPhoto?: string
  brand?: string
  model?: string
  carColor?: string
  carYear?: Date | string
  id?: number
  importDate?: Date | string
  packageAdmissionDate?: Date | string
  pddType?: string
  govPlate: string
  violationArticle: string | number
  violationName: string
  violationAmount: string | number
  complexTypeName?: string
  violationDate: Date | string
  violationPlace: string
  speedThreshold: string | number
  speed: string | number
  postToSignDate?: Date | string
  operator?: string
  violationId?: number
  protocolPausedId?: number
  protocolResumedId?: number
  protocolStopedId?: number
  protocolForeignersId?: number
  protocolArchiveId?: number
}

declare interface SidePlatesModuleType {
  govPlate: string
  isChecked?: boolean
  id: number
}

declare interface ProtocolById {
  address?: string
  aymak?: string
  aymakId?: number
  birthdate?: Date | string
  building?: string
  carBrand?: string
  carColor?: string
  carModel?: string
  carYear?: string
  certificate?: string
  certificateDate?: Date | string
  citizenship?: string
  citizenshipId?: number
  complexType?: number
  crossroadId?: number
  dcManager: {
    id: number
    passwordHash: string
    firstname?: string
    lastname?: string
    patronymic?: string
  }
  deliveryDate?: Date | string
  deliveryNote?: string
  deliveryStatus?: number
  deliveryUpdateDate?: Date | string
  deviceName?: string
  deviceSerial?: string
  direction?: number
  eni?: string
  ernSendDate?: Date | string
  fileName?: string
  firstname?: string
  flat?: string
  foreigner?: string
  gpsX?: string
  gpsY?: string
  house?: string
  id: number
  image?: string
  imageBase64: string
  lastname?: string
  managerCertExpiredate?: string
  managerCertIssuedate?: string
  managerCertificate?: string
  managerId?: number
  managerQueueDate?: Date | string
  managerSignDate?: Date | string
  moveDate?: Date | string
  obl?: string
  oblId?: number
  operatorId?: number
  operatorQueueDate?: Date | string
  operatorVerifyDate?: Date | string
  ownerType?: number
  patronymic?: string
  paymentDate?: Date | string
  paymentFrom?: string
  paymentNumber?: number
  paymentStatus?: number
  pddType?: string
  pdfFile?: string
  penalty?: boolean
  photo?: string
  pin?: string
  plateNumber?: string
  postIndex?: string
  postSendDate?: Date | string
  protocolDate?: Date | string
  protocolHash?: string
  protocolNumber?: number
  protocolReturn?: number
  protocolReturnDate?: Date | string
  protocolReturnReason?: number
  protocolStatus?: number
  raion?: string
  raionId?: number
  signedHash?: string
  speed?: number
  speedThreshold?: number
  street?: string
  streetId?: number
  user: {
    id: number
    passwordHash: string
    firstname?: string
    lastname?: string
    patronymic?: string
  }
  vendor?: number
  videoFile?: string
  village?: string
  villageId?: number
  violationAmmount?: number
  violationArticle?: string
  violationCategory?: number
  violationCode?: number
  violationDate?: Date | string
  violationPlace?: string
  violationSaveDate?: Date | string
  violationType?: string
}

declare interface JudgementHistory {
  changeStatusDate: Date | string
  dcJudgementReason: {
    id: number
    insertDate: Date | string
    judgementReason: string
    judgementStatus: number
  }
  dcJudgementStatus: {
    id: number
    insertDate: Date | string
    judgementReason: string
    judgementStatus: number
  }
  dcJudgementType: {
    id: number
    judgementType: string
    insertDate: Date | string
  }
  fio: string
  id: number
  insertDate: Date | string
  judgementNote: string
  judgementReason: number
  judgementStatus: number
  judgementType: number
  protocolId: number
  protocolNumber: number
}