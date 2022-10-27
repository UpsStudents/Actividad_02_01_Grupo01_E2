export class CelciusThermometer {
    public celciusThermometerId = "CT-001";
    
    public getTemperature(): number{
        return Math.floor(Math.random() * 100);
    }
}