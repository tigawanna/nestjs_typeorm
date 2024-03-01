import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { ColorsModule } from './colors/colors.module';

@Module({
  imports: [PostsModule, ColorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
