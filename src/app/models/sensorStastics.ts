// export interface SensorStatistics {
//   name: string,
//   totalFailures: number
// }

export type SensorInfo = Record<string, number>

export interface SensorStatistics {
  sensorName: string
  totalFailures: number
  errorAvg: number
}
