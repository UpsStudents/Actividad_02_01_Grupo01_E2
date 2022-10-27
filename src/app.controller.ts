import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Adapter } from './domain/Adapter';
import { TemperatureMonitor } from './domain/TemperatureMonitor';
import { ReportDTO } from './dto/report.dto';

@Controller()
export class AppController {
  
  reportsDto: ReportDTO[];
  monitor: TemperatureMonitor;

  constructor(private readonly appService: AppService) {
    this.monitor = new Adapter();
  }

  @Get()
  @Render('index')
  async getLastReports() {

    this.reportsDto = this.monitor.getTemperatureReport().thermometerReports.map(
      x => { 
        return {
          ingressDate: new Date(),
          code: x.deviceId,
          temperature: x.messure,
          description: x.deviceId
        }}
    );
    this.appService.create(this.reportsDto);
    let result = await this.appService.findAll();
    return { reports: result};
  }
}
