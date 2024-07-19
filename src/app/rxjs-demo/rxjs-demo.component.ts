import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Subject, Observable, interval } from 'rxjs';
import { map, filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-demo',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  template: `
    <div>
      <h2>RxJS Operators Demo</h2>
      <div>
        <h3>Filtered Numbers:</h3>
        <ul>
          <li *ngFor="let num of filteredNumbers">{{ num }}</li>
        </ul>
      </div>
    </div>
  `,
  styles: []
})
export class RxjsDemoComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  filteredNumbers: number[] = [];

  constructor() {
    this.createObservable();
  }

  private createObservable() {
    const numbers$: Observable<number> = interval(1000); // Emit numbers every second

    numbers$.pipe(
      // Transform emitted values
      map(value => value * 2),
      // Filter emitted values
      filter(value => value % 4 === 0),
      // Take until destroy signal
      takeUntil(this.destroy$)
    ).subscribe(value => {
      this.filteredNumbers.push(value);
    });
  }

  ngOnDestroy() {
    // Emit a value to trigger completion of the observable
    this.destroy$.next();
    this.destroy$.complete();
  }
}
