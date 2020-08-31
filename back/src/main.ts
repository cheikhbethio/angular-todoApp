import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// tslint:disable-next-line:typedef
async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	await app.listen(3000);
}
bootstrap();
