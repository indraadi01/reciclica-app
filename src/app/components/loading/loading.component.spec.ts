import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
<<<<<<< HEAD
import { Store } from '@ngrx/store';
import { show } from 'src/store/loading/loading.action';
import { hide } from 'src/store/loading/loading.action';
import { loadingReducer } from 'src/store/loading/loading.reducers';

import { LoadingComponent } from './loading.component';
import { StoreModule } from '@ngrx/store';
import { AppState } from '@capacitor/app';
=======

import { LoadingComponent } from './loading.component';
import { Store, StoreModule } from '@ngrx/store';
import { loadingReducer } from 'src/store/loading/loading.reducers';
import { AppState } from '@capacitor/app';
import { hide, show } from 'src/store/loading/loading.action';
>>>>>>> ce0a256d1543d5f6ac66a3ddc769c755a058d782

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;
  let store: Store<AppState>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingComponent ],
<<<<<<< HEAD
      imports: [
        IonicModule.forRoot(),
        StoreModule.forRoot([]),
        StoreModule.forFeature('loading', loadingReducer)
=======
      imports: [IonicModule.forRoot(),
        StoreModule.forRoot([]),
        StoreModule.forFeature("loading", loadingReducer)
>>>>>>> ce0a256d1543d5f6ac66a3ddc769c755a058d782
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingComponent);
    store = TestBed.get(Store);

<<<<<<< HEAD

=======
>>>>>>> ce0a256d1543d5f6ac66a3ddc769c755a058d782
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should hide loading component when it is not loading', () => {
<<<<<<< HEAD
    const compiled = fixture.nativeElement;
=======
    const compiled = fixture.debugElement.nativeElement;
>>>>>>> ce0a256d1543d5f6ac66a3ddc769c755a058d782

    store.dispatch(hide());
    fixture.detectChanges();

    expect(compiled.querySelected(".backdrop")).toBeNull();
  });
<<<<<<< HEAD

  it('should show loading component when it is loading', () => {
    const compiled = fixture.nativeElement;
=======
  it('should show loading component when it is not loading', () => {
    const compiled = fixture.debugElement.nativeElement;
>>>>>>> ce0a256d1543d5f6ac66a3ddc769c755a058d782

    store.dispatch(show());
    fixture.detectChanges();

<<<<<<< HEAD
    expect(compiled.querySelected(".backdrop")).toBeNull();
=======
    expect(compiled.querySelected(".backdrop")).not.toBeNull();
>>>>>>> ce0a256d1543d5f6ac66a3ddc769c755a058d782
  });
});
