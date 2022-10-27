import { Injectable } from '@nestjs/common';
import { DataSource, EntityManager } from 'typeorm';
import { ReportDTO } from './dto/report.dto';
import { Report } from './entities/report';

@Injectable()
export class AppService {
  constructor(private manager: EntityManager, private dataSource: DataSource) {}

  async findAll():Promise<ReportDTO[]> {
    let response: ReportDTO[] = [];
    let results = await this.dataSource
      .createQueryBuilder()
      .select('*')
      .from(Report, 'report')
      .take(20)
      .orderBy('report.registrationDate', 'DESC')
      .getRawMany();
    
    Promise.all(
      results = results.map(async (result: Report) => {
        response.push({
          ingressDate: result.registrationDate,
          code: result.code,
          temperature: result.temperature,
          description: result.description
        });
      })
    );

    return response;

  }

  create(reportsDto: ReportDTO[]) {
    let reports: any[] = reportsDto.map(
      reportDto => { 
        let report = new Report();
        report.registrationDate = reportDto.ingressDate;
        report.temperature = reportDto.temperature;
        report.description = reportDto.description;
      return report
    });

    return this.manager.save(reports);
  }
}
