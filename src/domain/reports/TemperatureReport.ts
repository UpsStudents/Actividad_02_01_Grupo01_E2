export class TemperatureReport {
    public thermometerReports: ThermometerReport[];
}

export class ThermometerReport {
    public deviceId: string;
    public messure: number;
}