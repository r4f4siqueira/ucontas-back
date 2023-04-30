import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { LoginAuthDto } from '../dto/login-auth.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(userLogin: LoginAuthDto): Promise<any> {
    const user = await this.authService.validateUser(userLogin);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
