import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

export const routes: Routes = [
  {
    path: '',
    component: FormComponent,
    title: 'Forme page',
  },
  {
    path: 'thankyou',
    component: ThankYouComponent,
    title: 'Thank You !',
  },
];
