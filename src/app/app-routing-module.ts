import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { TunnelComponent } from './python/tunnel/tunnel.component';
import { HistogramComponent } from './python/histogram/histogram.component';
import { PythonComponent } from './python/python.component';
import { TypeScriptComponent } from './typescript/typescript.component';

const appRoutes: Routes = [
  {path: '', 'component': TunnelComponent},
  // {path: 'tunnel', 'component': TunnelComponent},
  // {path: 'histogram', 'component': HistogramComponent},
  {path: 'python', 'component': PythonComponent, children: [
    { path: 'tunnel', 'component': TunnelComponent },
    { path: 'histogram', 'component': HistogramComponent }    
  ] },
  {path: 'typescript', 'component': TypeScriptComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}