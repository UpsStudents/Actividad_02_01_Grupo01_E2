export class FarenheitThermometer {
    public deviceId = "CF-A";
    
    public getMessure(): number{
        return Math.floor(Math.random() * 100);
    }
}