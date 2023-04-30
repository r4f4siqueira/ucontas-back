import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';

@ApiTags('🔐 Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  //NOTE - Desativado temporariamente
  // @UseGuards(LocalAuthGuard)
  // @Post('local')
  // async loginLocal(
  //     @Query('username') username: string,
  //     @Query('password') password: string,
  //     @Request() req,
  // ) {
  //     return req.user;
  // }

  //@UseGuards(LocalAuthGuard)
  @Post()
  async loginJwt(@Body() userLogin: LoginAuthDto) {
    return this.authService.login(userLogin);
  }
}
