import { Module, forwardRef } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { ColorsModule } from 'src/colors/colors.module';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [ColorsModule],
})
export class PostsModule {}
