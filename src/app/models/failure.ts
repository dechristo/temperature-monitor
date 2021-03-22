import  { Location } from './location';

export interface Failure {
  id: number
  name: string
  value: number
  location: Location
  datetime: number
}
