import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { TunnelComponent } from './tunnel/tunnel.component';
import { HistogramComponent } from './histogram/histogram.component';

const appRoutes: Routes = [
  {path: '', 'component': TunnelComponent},
  {path: 'tunnel', 'component': TunnelComponent},
  {path: 'histogram', 'component': HistogramComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}