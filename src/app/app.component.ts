import {Component, EventEmitter, Output} from '@angular/core';

// export interface Option {
//   value: string,
//   isSelected: boolean,
//   id: number,
// }

export class OptionClass {
  constructor({value = '', isSelected = false, id = 0}) {
    this.value = value;
    this.isSelected = isSelected;
    this.id = id
  }

  value: string = ''
  isSelected: boolean = false
  id: number = 0
}


export class FilterClass {
  constructor({label = '', id = '', options = [new OptionClass({})]}) {
    this.label = label
    this.id = id
    this.options = options;
  }


  label: string = ''
  id: string = ''
  options: OptionClass[] = []

  public getSelected(): OptionClass {
    return new OptionClass({...this.options.find(option => option.isSelected)})

  }

  public countSelected(): number {
    return this.options.filter(option => option.id !== 0 && option.isSelected).length
  }
}

export class SessionClass {
  constructor({sessionDate = new Date(), sessionName = '', numberOfParticipants = 0, nameOfTrainer = '', sessionProgress = 0, id = -1}) {
    this.sessionDate = sessionDate;
    this.sessionName = sessionName;
    this.numberOfParticipants = numberOfParticipants;
    this.nameOfTrainer = nameOfTrainer;
    this.sessionProgress = sessionProgress;
    this.id = id

  }

  sessionDate: Date = new Date()
  sessionName: string = ''
  numberOfParticipants: number = 0
  nameOfTrainer: string = ''
  sessionProgress: number = 0
  id: number = -1

}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    this.sortingByProgress.bind(this)
  }

  toFormOptions(array: any) {
    const option = []
    let i = 0;
    for (let item of array) {
      item.id = i
      option.push(new OptionClass(item))
      i++
    }
    return option
  }

  toFormFilter(array: any) {
    const filter = []
    for (let item of array) {
      filter.push(new FilterClass(item))
    }
    return filter
  }

  toFormSessions(array: any) {
    const session = []
    let i = 0;
    for (let item of array) {
      item.id = i
      session.push(new SessionClass(item))
      i++
    }
    return session
  }

  optionsProgram = [
    {value: 'Все', isSelected: true, id: -1},
    {value: 'Главные правила продаж', isSelected: false, id: -1},
    {value: 'Первичное обучение КС', isSelected: false, id: -1}
  ]
  optionsPeriod = [
    {value: 'Все', isSelected: true, id: -1},
    {value: 'Июнь 2021', isSelected: false, id: -1},
    {value: 'Июль 2021', isSelected: false, id: -1}
  ]
  optionsStatus = [
    {value: 'Все', isSelected: true, id: -1},
    {value: 'Done', isSelected: false, id: -1},
    {value: 'In progress', isSelected: false, id: -1}
  ]
  optionsProgress = [
    {value: 'По прогрессу обучения', isSelected: true, id: -1},
    {value: 'По названию', isSelected: false, id: -1},
    {value: 'По кол-ву участников', isSelected: false, id: -1}
  ]
  filters = [
    {label: 'Программа', id: 'program', options: this.toFormOptions(this.optionsProgram)},
    {label: 'Период', id: 'period', options: this.toFormOptions(this.optionsPeriod)},
    {label: 'Статус', id: 'status', options: this.toFormOptions(this.optionsStatus)},
    {label: 'Сортировка', id: 'sort', options: this.toFormOptions(this.optionsProgress)},
  ]
  filtersApp = this.toFormFilter(this.filters)
  sessions = [
    {
      sessionDate: new Date('2020-12-23T09:00:00'),
      sessionName: 'Страхование с заботой о клиенте',
      numberOfParticipants: 12,
      nameOfTrainer: '',
      sessionProgress: 96,
      id: -1
    },
    {
      sessionDate: new Date('2020-10-19T14:30:00'),
      sessionName: 'Первичное обучение КС',
      numberOfParticipants: 8,
      nameOfTrainer: '',
      sessionProgress: 86,
      id: -1
    },
    {
      sessionDate: new Date('2020-11-14T09:30:00'),
      sessionName: 'Главные правила продаж',
      numberOfParticipants: 10,
      nameOfTrainer: '',
      sessionProgress: 92,
      id: -1
    }
  ]
  sessionApp = this.toFormSessions(this.sessions)
  compare = (a: SessionClass, b: SessionClass) => b.sessionProgress - a.sessionProgress
  getFilter(id:string='sort'): FilterClass{
    return new FilterClass({...this.filters.find(item=>item.id===id)})// this.filters.find(item=>item.id===id)
  }
  sortingByProgress(event:any) {
    console.log('work')
   // console.log(this.sessionApp.sort(this.compare));
  }

  getCountOfSession(): number {
    return this.sessionApp.length
  }
  getFilters(){
    return this.filtersApp.filter(f=>f.id!=='sort')
  }

  isGroup: boolean = true;
  clickFilter(){
    console.log('filter')
  }
  clickSearch(){
    console.log('search')
  }
}
