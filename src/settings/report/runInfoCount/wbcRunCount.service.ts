import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WbcRunCountEntity } from './wbcRunCount.entity';
import { CreateWbcRunCountDto } from './dto/wbcRunCountDto';

@Injectable()
export class WbcCountSetService {
  constructor(
    @InjectRepository(WbcRunCountEntity)
    private readonly wbcRunCountEntityRepository: Repository<WbcRunCountEntity>,
  ) {}

  async create(createDto: CreateWbcRunCountDto): Promise<WbcRunCountEntity> {
    const { userId, wbcRunCountItems } = createDto as CreateWbcRunCountDto;
    const createdItems: WbcRunCountEntity[] = [];
    console.log(wbcRunCountItems);
    console.log(typeof wbcRunCountItems);
    if (wbcRunCountItems && wbcRunCountItems.length) {
      for (const item of wbcRunCountItems) {
        const imagePrintEntity = this.wbcRunCountEntityRepository.create({
          ...item,
          userId,
        });
        const createdItem =
          await this.wbcRunCountEntityRepository.save(imagePrintEntity);
        createdItems.push(createdItem);
      }
    }

    return createdItems[0];
  }

  async update(
    userId: number,
    updateDto: CreateWbcRunCountDto,
  ): Promise<WbcRunCountEntity[]> {
    const { wbcRunCountItems } = updateDto;

    const updatedItems: WbcRunCountEntity[] = [];
    if (wbcRunCountItems && wbcRunCountItems.length) {
      for (const item of wbcRunCountItems) {
        const updatedItem = await this.updateItem(userId, item);
        updatedItems.push(updatedItem);
      }
    }
    return updatedItems;
  }

  private async updateItem(
    userId: number,
    item: any,
  ): Promise<WbcRunCountEntity> {
    const existingFilePathSet = await this.wbcRunCountEntityRepository.findOne({
      where: { userId, num: item.num },
    });

    if (existingFilePathSet) {
      await this.wbcRunCountEntityRepository.update(
        existingFilePathSet.num,
        item,
      );
      return await this.wbcRunCountEntityRepository.findOne({
        where: { userId, num: item.num },
      });
    }

    return null;
  }

  async findByUserId(userId: number): Promise<WbcRunCountEntity[]> {
    return await this.wbcRunCountEntityRepository.find({ where: { userId } });
  }
}
