import { Module } from '@nestjs/common';
import { LoggerModule } from 'src/shared/logger/logger.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
	imports: [LoggerModule],
	controllers: [UserController],
	providers: [UserService]
})
export class UserModule { }
