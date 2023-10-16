import { Injectable } from '@angular/core';
import { Appareil } from '../models/appareil';


@Injectable({
  providedIn: 'root'
})
export class AppareilsService {
  appareilsList: Appareil[] = [
    {
      name: 'Machine à laver',
      description: [
        'volume: 6 litres',
        'tps de lavage: 2h',
        'consommation : 173kWh/an'],
        isOn: true
    },
    {
      name: 'télé', description: [
        'dimension: 40 pouces',
        'consommation : 20kWh/an'],
        isOn: true
    },
    {
      name: 'ordi', description: [
        'marque: fait maison',
        'consommation : 503kWh/an'],
        isOn: false
    },
  ];
  constructor() { }
}
