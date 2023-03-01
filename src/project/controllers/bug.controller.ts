import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { bugDto } from '../models/bug.entity';
import { BugService } from '../services/bug.service';

@Controller('bug')
export class BugController {
  constructor(private readonly bugService: BugService) {}

  @Post()
  create(@Body() createBugDto: bugDto) {
    return this.bugService.create(createBugDto);
  }

  @Get()
  findAll() {
    return this.bugService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bugService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBugDto: bugDto) {
    return this.bugService.update(+id, updateBugDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bugService.remove(+id);
  }
}
