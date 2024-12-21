import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-entry',
  standalone: true,
  imports: [],
  templateUrl: './expense-entry.component.html',
  styleUrl: './expense-entry.component.css'
})
export class ExpenseEntryComponent implements OnInit {
  title: string = "title";
  constructor() { }
  ngOnInit(): void { 
    this.title = 'Expanse Entry';
  }

}
