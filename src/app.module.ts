import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { NoteModule } from './note/note.module';

@Module({
  imports: [AuthModule, NoteModule],
})
export class AppModule {}
