import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { RepositoryIssuelistComponent } from './repository-issuelist/repository-issuelist.component'

const routes: Routes = [
  {path: 'repository-list', component: RepositoryListComponent},
  {path: 'repository-issuelist/:uid', component: RepositoryIssuelistComponent},
  {path: '', redirectTo: 'repository-list', pathMatch: 'full'},
  ///repositories/{repositoryUid}/scan
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
