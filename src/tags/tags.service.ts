import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from './entities/tag.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagsRepository: Repository<Tag>,
  ) {}

  async create(createTagDto: CreateTagDto) {
    return await this.tagsRepository.save(createTagDto);
  }

  async findAll() {
    return await this.tagsRepository.find();
  }

  async findOne(id: number) {
    return await this.tagsRepository.findOne({ where: { tagId: id } });
  }

  async update(id: number, updateTagDto: UpdateTagDto) {
    try {
      return await this.tagsRepository.update(id, {
        descricao: updateTagDto.descricao,
        type: updateTagDto.type,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: number) {
    try {
      return await this.tagsRepository.delete(id);
    } catch (error) {
      console.log(error);
    }
  }
}
