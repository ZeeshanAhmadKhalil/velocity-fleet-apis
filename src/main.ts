import { AppModule } from '@modules/app/app.module'
import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import {
  DocumentBuilder,
  SwaggerModule
} from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // Debug information
  const port = parseInt(process.env.PORT) || 6902
  console.log(`Starting Velocity Fleet APIs on port: ${port}`)
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`)
  console.log(`Database connection string: ${process.env.CONNECTION_STRING ? 'Set' : 'Not set'}`)

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
  app.enableCors();
  await app.listen(port)
  console.log(`Velocity Fleet APIs is running on port: ${port}`)
}
bootstrap()
