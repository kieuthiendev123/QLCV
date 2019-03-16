
import { Component, OnInit } from '@angular/core';
import { DragulaModule } from 'ng2-dragula';
// import { DragulaService } from '../../../../node_modules/ng2-dragula';
import { DragulaService } from 'ng2-dragula';
import { DragDropDirectiveModule } from "angular4-drag-drop";
import { Subject, Observable, Subscription } from 'rxjs/Rx';
import { ProjectTask, Project,Sprint } from '../../_models';
import { ProjectTaskService,SprintService } from '../../_services';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import * as _ from 'lodash';
@Component({
  selector: 'app-list-taskforsprint',
  templateUrl: './taskforsprint.component.html',
  styleUrls: ['./taskforsprint.component.scss']
})
export class TaskforsprintComponent implements OnInit {
  public toastOptions: ToastOptions = {
    title: '',
    msg: '',
    showClose: true,
    timeout: 5000,
    theme: 'material'
  };
  MANY_ITEMS = 'MANY_ITEMS';
  public many: Array<ProjectTask> = [];
  public list_data: Array<ProjectTask> = [];
  public list_th: any;
  public list_status_0: Array<ProjectTask> = [];
  public list_status_1: Array<ProjectTask> = [];
  public obj_search: ProjectTask;
  public obj_edit: ProjectTask;
  public obj_search_project: ProjectTask;
  public obj_search_sprint: ProjectTask;
  public list_project: Array<Project> = [];
  public list_sprint: Array<Sprint> = [];
  public flag:number;
  subs = new Subscription();
  constructor(private dragulaService: DragulaService, private ProjectTaskService: ProjectTaskService,private SprintService: SprintService, @Inject(DOCUMENT) private _document: any, private toastyService: ToastyService, private toastyConfig: ToastyConfig) {
    this.subs.add(dragulaService.dropModel(this.MANY_ITEMS)
      .subscribe(({ el, target, source, sourceModel, targetModel, item }) => {
      
        var rating = target.getAttribute('id');
        let index = _.findIndex(targetModel, (val) => {
          return val.id == el.getAttribute('id');
        });
        console.log(index);
        let item_assign = new ProjectTask();
        if (index > -1) {
            if(rating == "left")
              {
                item_assign = targetModel[index];
                console.log(item_assign);
                this.ProjectTaskService.TaskAssigned(item_assign).subscribe(() => {
                  this.toastOptions.msg = 'Kéo công việc thành công !';
                  this.toastyService.success(this.toastOptions);
                }, () => {
                  this.toastOptions.msg = 'Kéo công việc không thành công !';
                  this.toastyService.warning(this.toastOptions);
                });
              }
          if(rating == "right" )
            {
              item_assign = targetModel[index];
              console.log(item_assign);
              this.ProjectTaskService.TaskUnassigned(item_assign).subscribe(() => {
                this.toastOptions.msg = 'Kéo công việc thành công!';
                this.toastyService.success(this.toastOptions);
              }, () => {
                this.toastOptions.msg = 'Kéo công việc không thành công!';
                this.toastyService.warning(this.toastOptions);
              });
            }
        }
      })
    );
    this.subs.add(dragulaService.drag(this.MANY_ITEMS).subscribe(({ el }) => {
      this.removeClass(el, 'ex-moved');
    }));

    this.subs.add(dragulaService.drop(this.MANY_ITEMS).subscribe(({ el }) => {
      this.addClass(el, 'ex-moved');
    }));

    this.subs.add(dragulaService.over(this.MANY_ITEMS).subscribe(({ el, container }) => {
      this.addClass(container, 'ex-over');
    }));

    this.subs.add(dragulaService.out(this.MANY_ITEMS).subscribe(({ el, container }) => {
      this.removeClass(container, 'ex-over');
    }));
  }
  ngOnInit() {
    this.loadList();
  }
    CheckProject()
  {
      this.SprintService.getListSprint(this.obj_edit).subscribe(data => {
        this.list_sprint = data.data;
        if(this.obj_edit.idSprint == null)
        {
          this.list_status_0 = [];
          this.list_status_1 = [];
        }
        else
        {
          this.ProjectTaskService.listStatus00(this.obj_edit).subscribe(data => {
            this.list_status_0 = data.data;
            console.log(this.list_status_0);
          });
          this.ProjectTaskService.listStatus11(this.obj_edit).subscribe(data => {
            this.list_status_1 = data.data;
            console.log(this.list_status_0);
          });
        }
    });
  }
  loadList() {
    this.obj_edit = new ProjectTask();
    this.SprintService.getListProject().subscribe(data => {
      this.list_project = data.data;
    });
    this.CheckProject();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  private hasClass(el: Element, name: string): any {
    return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  }
  private addClass(el: Element, name: string): void {
    if (!this.hasClass(el, name)) {
      el.className = el.className ? [el.className, name].join(' ') : name;
    }
  }
  private removeClass(el: Element, name: string): void {
    if (this.hasClass(el, name)) {
      el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
    }
  }


}