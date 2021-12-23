import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dashboards/analytics'},
  {
    path: '',
    component: LayoutComponent,
    data: {
      layout: 'empty'
    },
    children: [
      {
        path: 'dashboard', children: [
          {
            path: 'analytics',
            loadChildren: () => import('src/app/modules/admin/dashboards/analytics/analytics.module').then(m => m.AnalyticsModule)
          }
        ]
      }

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
