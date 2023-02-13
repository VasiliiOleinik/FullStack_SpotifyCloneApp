import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api')
// @Controller  - принимает параметром маршрут, который будем обрарабывать в данном контроллере
export class AppController {
  constructor(private appService: AppService) {}
  @Get()
  getUsers() {
    return this.appService.getUsers();
  }
}

// в контроллере мы взаемодействуем только с запросами и ответами (полкчили какой-то запрос, обработали его и вернули на клиент)
// описываем тип запроса, работаем с какими-то взодными параметрами (квери параметры, заголовки)
