import { Component } from '@angular/core';
//import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-repository-issuelist',
  templateUrl: './repository-issuelist.component.html',
  styleUrls: ['./repository-issuelist.component.css']
})
export class RepositoryIssuelistComponent {

  issues: any = [];
  uid: any = "";
  constructor(private repositoryService: RepositoryService,
    private activatedRoute: ActivatedRoute) {
      this.activatedRoute.paramMap.subscribe(paramMap => {
        if(paramMap.get('uid')!==null){
          this.uid = paramMap.get('uid');
        }
        this.getRepositoryIssueList(this.uid);
      })
  }

  private getRepositoryIssueList(uid: string) {
    this.repositoryService.getRepositoryIssueList(uid).subscribe(data => {
      console.log(data);
      this.issues = data.list;
    });
  }
}
