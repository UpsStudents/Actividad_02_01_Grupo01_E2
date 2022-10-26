import { TemperatureMonitor } from "./TemperatureMonitor";
import { TemperatureReport } from "./reports/TemperatureReport";
import { CelciusThermometer } from "./thermometers/CelciusThermometer";
import { FarenheitThermometer } from "./thermometers/FarenheitThermometer";

export class Adapter implements TemperatureMonitor{
    
    private celciusThermometer: CelciusThermometer = new CelciusThermometer();
    private farenheitThermometer: FarenheitThermometer = new FarenheitThermometer();
    

    getTemperatureReport(): TemperatureReport {
        
        let response: TemperatureReport = {
            thermometerReports: [
                {
                    deviceId: this.celciusThermometer.celciusThermometerId,
                    messure: this.celciusThermometer.getTemperature()
                },
                {
                    deviceId: this.farenheitThermometer.deviceId,
                    messure: this.farenheitThermometer.getMessure()
                }
            ]
        };

        return response;
    }

    transformFarenheitToCelcius(fareheitTemperature: number):number {
        return fareheitTemperature + 60;
    }

}