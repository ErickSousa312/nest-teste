import { SetMetadata } from '@nestjs/common';
export const jwtConstants = {
  secret: '7b55f59d034002b5fdb7eee735c8846f',
};

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
