import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RepositoryService } from '../repository.service';
@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.css']
})
export class RepositoryListComponent {

  repositories: any = [];

  constructor(private repositoryService: RepositoryService,
    private router: Router) {
    this.getRepositories();
  }

  /* ngOnInit(): void {

  } */

  private getRepositories() {
    this.repositoryService.getRepositoryList().subscribe(data => {
      console.log(data);
      // for v2
      this.repositories = data.list;

      // for v1
      //this.repositories = data;
    });
  }

    public scanRepository(uid: string){
    this.repositoryService.scanRepository(uid).subscribe(data => {
      console.log(data);
    });
  }

  public getScanReport(uid: string){
    this.router.navigate(['/repository-issuelist', uid]); 
  }
}
