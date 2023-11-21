import { SetMetadata } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export const jwtConstants = {
  get secret() {
    const configService = new ConfigService();
    return configService.get<string>('SECRET');
  },
};

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
