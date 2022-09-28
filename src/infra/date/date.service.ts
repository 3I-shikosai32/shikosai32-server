import { Injectable, Logger } from '@nestjs/common';
import { isBefore } from 'date-fns';
import { formatInTimeZone, toDate } from 'date-fns-tz';

@Injectable()
export class DateService {
  private readonly logger = new Logger(DateService.name);

  getNow(): Date {
    const now = toDate(formatInTimeZone(new Date(), 'Asia/Tokyo', 'yyyy-MM-dd HH:mm:ssxxx'));

    return now;
  }

  getDay2(): Date {
    const day2 = toDate(formatInTimeZone('2022-10-23 00:00:00+09:00', 'Asia/Tokyo', 'yyyy-MM-dd HH:mm:ssxxx'));

    return day2;
  }

  isBeforeDay2(date: Date, day2: Date = this.getDay2()): boolean {
    const isBeforeDay2 = isBefore(date, day2);

    return isBeforeDay2;
  }
}
