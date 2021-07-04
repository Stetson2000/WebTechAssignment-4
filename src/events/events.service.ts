import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/Event.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventsService {
 

  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>
  ) {}


  
  create(createEventDto: CreateEventDto) {
    return this.eventRepository.save(createEventDto)
  }

  findAll() {
    return this.eventRepository.find()
  }

  findOne(id: number) {
    return this.eventRepository.findOne(id)
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return `This action updates a #${id} event`;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
