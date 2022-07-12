import { TestBed } from '@angular/core/testing';

import { ToDoService } from './to-do.service';

describe('ServiceService', () => {
  let toDo: ToDoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    toDo = TestBed.inject(ToDoService);
  });

  it('should be created', () => {
    expect(toDo).toBeTruthy();
  });
});
