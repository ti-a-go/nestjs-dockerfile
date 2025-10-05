import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      message: 'Basic Nest application',
      endpoints: [
        {
          random: 'Returns a random number created with Math.random() function',
          url: 'http://localhost:3000/random',
        },
      ],
    };
  }

  getRandomNumber(): number {
    return Math.random();
  }
}
