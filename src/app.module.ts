import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './events/entities/event.entity';


@Module({
  imports: [EventsModule, TypeOrmModule.forRoot({
    type: 'mariadb',
    host: 'db',
    port: 3306,
    username: 'root',
    password: 'Web.Tech123',
    database: 'dev_profile',
    autoLoadEntities: true,
    entities: [Event],
    logger: 'advanced-console',
    // migrationsRun: true,
    synchronize: true,
  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
