import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  public seats: any = {
    rows:[],
    cols:[]
  };

  public config: any = {
    sizeOfGrid: {
      rowSize: 20,
      columnSize: 20,
    },
    booked: [
      { column: 1, row: 1 },
      { column: 3, row: 2 }
    ]
  }

  constructor() { }

  ngOnInit() {

    for (let i = 1; i <= this.config.sizeOfGrid.rowSize; i++) {
      this.seats.rows.push(i);
    }
    
    for (let j = 1; j <= this.config.sizeOfGrid.columnSize; j++) {
      this.seats.cols.push(j);
    }

  }

}
