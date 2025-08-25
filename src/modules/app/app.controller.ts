import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  getHealth(): object {
    return {
      status: 'OK',
      timestamp: new Date().toISOString(),
      message: 'Velocity Fleet APIs is running!',
      database: 'Enabled - MongoDB Atlas'
    };
  }

  @Post('test/set-password')
  async setTestPassword(@Body() body: { email: string, password: string }) {
    // This is a temporary endpoint for testing only
    // In production, this should be removed
    try {
      // Import the UserService and update the password
      const { UserService } = await import('../user/user.service');
      const { User } = await import('@schemas/user.schema');
      const { encryptPassword } = await import('@config/helper');
      
      // This is a simplified approach - in real implementation you'd inject the service
      return {
        message: 'Test password endpoint - use this for testing only',
        email: body.email,
        password: body.password,
        note: 'This endpoint should be removed in production'
      };
    } catch (error) {
      return {
        error: 'Service not available in this context',
        message: 'Use the generated password from registration or check the logs'
      };
    }
  }
}
