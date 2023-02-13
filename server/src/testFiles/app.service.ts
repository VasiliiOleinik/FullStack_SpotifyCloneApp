import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getUsers(): string {
    return 'GET ALL USERS';
  }
}

// в сервисах описывается логика, бизнес процессы.
// чтобы этот сервис можно было использовать, его нужно пометить аннотицией @injectable
// это делается для так-называемого внедрения зависимостей, Dependency injection

// Dependency injection - это конда какие-то внешние кмпоненты, внедряем во внешний компонент

// Сервисы отвечают за логику, получить что-то с БД, обработать и вернуть
