import { TemperatureReport } from "./reports/TemperatureReport";

export interface TemperatureMonitor {
    getTemperatureReport(): TemperatureReport
}