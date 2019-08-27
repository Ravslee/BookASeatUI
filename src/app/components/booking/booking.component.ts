import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';

const KEY_SELECTED_SEATS = "selected_keys";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  public seats: any = {
    rows: [],
    cols: []
  };

  public selectedSeats: any = [];



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

  constructor(private localStorage: LocalStorage) { }

  ngOnInit() {

    for (let i = 1; i <= this.config.sizeOfGrid.rowSize; i++) {
      this.seats.rows.push(i);
    }

    for (let j = 1; j <= this.config.sizeOfGrid.columnSize; j++) {
      this.seats.cols.push(j);
    }

    this.localStorage.getItem(KEY_SELECTED_SEATS)
      .toPromise()
      .then(res => {
        if(res){
          this.selectedSeats = res;
          console.log("State Loaded!");
        }
      });

  }

  onSeatSelected(i, j) {
    if (this.isSelectedSeat(i, j)) {
      const seat = this.isSelectedSeat(i, j)
      const index = this.selectedSeats.findIndex(el => el.column == seat.column && el.row == seat.row)
      this.selectedSeats.splice(index, 1);
    } else {
      this.selectedSeats.push({ column: j, row: i })
    }
    console.log(this.selectedSeats);

    this.localStorage.setItem(KEY_SELECTED_SEATS, this.selectedSeats)
      .toPromise()
      .then(res => {

        console.log("State added!");
      })

  }

  public isSeatUnAvailable(i, j) {
    return this.config.booked.find(el => {
      return el.column == j && el.row == i;
    });
  }

  public isSelectedSeat(i, j) {
    return this.selectedSeats.find(el => {
      return el.column == j && el.row == i;
    });
  }
}
