import { Body, Controller, Get, Post, Redirect, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { AssetBuilder } from './Assets/AssetBuilder';
import { AssetDirector } from './Assets/AssetDirector';
import { FixedAsset } from './FixedAsset/FixedAsset';

@Controller()
export class AppController {
  assets;
  director: AssetDirector;
  builder: AssetBuilder;
  constructor(private readonly appService: AppService) {
    this.director = new AssetDirector();
    this.builder = new AssetBuilder();
    this.director.setBuilder(this.builder);
  }

  @Get()
  @Render('index')
  async getAssets() {
    this.assets = await this.appService.findAll();
    return { assets: this.assets };
  }

  @Post()
  @Redirect('/')
  async createAsset(@Body() body) {
    switch (body.asset) {
      case 'computer':
        this.director.buildComputer();
        break;
      case 'table':
        this.director.buildTable();
        break;
      case 'chair':
        this.director.buildChair();
        break;
    }
    await this.appService.create(this.director.getProduct());
  }
}
