import { AppModule } from '@modules/app/app.module'
import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import {
  DocumentBuilder,
  SwaggerModule
} from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Velocity Fleet')
    .setDescription('Velocity Fleet REST APIs')
    .setVersion('1.0')
    .addTag('auth')
    .addTag('user')
    .addTag('category')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  app.useGlobalPipes(new ValidationPipe())
  await app.listen(8085)
}
bootstrap()
