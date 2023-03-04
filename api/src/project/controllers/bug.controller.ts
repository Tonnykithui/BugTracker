import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResponseMessage } from 'src/customs/Response';
import { bugDto } from '../models/bug.entity';
import { BugService } from '../services/bug.service';

@Controller('bug')
export class BugController {
  constructor(private readonly bugService: BugService) {}

  @Post()
  async create(@Body() createBugDto: bugDto) {
    return new ResponseMessage('', await this.bugService.create(createBugDto));
  }

  @Get()
  async findAll() {
    return new ResponseMessage('', await this.bugService.findAll());
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new ResponseMessage('', await this.bugService.findOne(+id));
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBugDto: bugDto) {
    return new ResponseMessage('', await this.bugService.update(+id, updateBugDto));
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new ResponseMessage('', await this.bugService.remove(+id));
  }
}
