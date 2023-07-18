import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {

  selectedOption: string = 'freight';
  isChecked = false;
  fromLocation:any={
    title:'IN NSA',
    subTitle:'Niva Seva'
  };
  destinationLocation:any={
    title:'AE JEA',
    subTitle:'Jabel Ali'
  };
  commodity:any={
    title:'ONION',
    subTitle:'Vegetable, Chilled'
  };
  fromList:any=[];
  destList:any=[];
  commodityList:any=[];
  noOfContainer:any = 0;

  toggleCheckbox(): void {
    this.isChecked = !this.isChecked;
  }
  
    ngOnInit(): void {
      this.fromList = [
        {
          title:'IN NSA',
          subTitle:'Niva Seva'
        }
      ];
      this.destList = [
        {
          title:'AE JEA',
          subTitle:'Jabel Ali'
        }
      ];
      this.commodityList = [
        {
          title:'ONION',
          subTitle:'Vegetable, Chilled'
        }
      ];
    }

    onChange(selectedValue: string) {
      this.selectedOption = selectedValue;
      console.log('Selected Option:', this.selectedOption);
    }
    increase(){
      this.noOfContainer++;
    }
    decrease(){
      this.noOfContainer > 0?this.noOfContainer-- : 0;
    }

}
