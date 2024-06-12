export declare class RuningInfoEntity {
    id: number;
    state?: boolean;
    traySlot?: string;
    slotNo: string;
    barcodeNo: string;
    patientId: string;
    patientNm: string;
    gender: string;
    birthDay: string;
    wbcCount: string;
    slotId: string;
    orderDttm: string;
    testType: string;
    analyzedDttm: Date;
    createDate: string;
    stateCd: string;
    tactTime: string;
    maxWbcCount: string;
    lowPowerPath: any[];
    runningPath: any[];
    userId: number;
    cassetId: string;
    isNormal: string;
    wbcInfo: any[];
    wbcInfoAfter: any[];
    rbcInfo: any[];
    rbcInfoAfter: any[];
    submitState?: string;
    submitOfDate?: Date;
    signedUserId?: string;
    isNsNbIntegration?: string;
    wbcMemo?: string;
    rbcMemo?: string;
    pcIp?: string;
    cbcPatientNo?: string;
    cbcPatientNm?: string;
    cbcSex?: string;
    cbcAge?: string;
    rootPath?: string;
}