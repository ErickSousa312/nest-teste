import { SetMetadata } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export const secret = (conf: ConfigService) => {
  console.log('oi' + conf);
  return conf.get<string>('SECRET') as string;
};

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
