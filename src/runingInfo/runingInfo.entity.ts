// runing-info.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RuningInfoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  state?: boolean;

  @Column()
  submit?: string;

  @Column()
  traySlot?: string;

  @Column()
  submitDate?: string;

  @Column()
  slotNo: string;

  @Column()
  barcodeNo: string;

  @Column()
  patientId: string;

  @Column()
  patientNm: string;

  @Column()
  gender: string;

  @Column()
  birthDay: string;

  @Column()
  wbcCount: string;

  @Column()
  slotId: string;

  @Column()
  orderDttm: Date;

  @Column()
  testType: string;

  @Column()
  analyzedDttm: Date;

  @Column()
  pltCount: string;

  @Column()
  malariaCount: string;

  @Column()
  maxRbcCount: string;

  @Column()
  stateCd: string;

  @Column()
  tactTime: string;

  @Column()
  maxWbcCount: string;

  @Column('json')
  lowPowerPath: any[];

  @Column('json')
  runningPath: any[];

  @Column('json')
  bminfo: any[];

  @Column()
  userId: number;

  @Column()
  cassetId: string;

  @Column()
  isNormal: string;

  @Column('json')
  wbcInfo: any[];

  @Column('json')
  wbcInfoAfter: any[];

  @Column('json')
  rbcInfo: any[];

  @Column('json')
  processInfo: {
    cassetteNo: number;
    barcodeId: string;
    patientId: string;
    patientName: string;
    wbcCount: string;
    orderDate: string;
    analyzedDttm: string;
  };

  @Column('json')
  orderList: {
    barcodeId: string;
    patientName: string;
    orderDate: string;
    analyzedDttm: string;
    state: string;
  }[];
  @Column()
  signedState?: string;

  @Column()
  signedOfDate?: Date;

  @Column()
  signedUserId?: string;

  @Column('json')
  classificationResult?: any[];

  @Column()
  isNsNbIntegration?: string;

  @Column()
  memo?: string;

  @Column()
  rbcMemo?: string;
}
