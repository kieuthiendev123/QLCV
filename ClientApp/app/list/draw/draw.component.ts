
import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs/Rx';
import { ProjectTask } from '../../_models';
import { ProjectTaskService } from '../../_services';
import { ToastyService, ToastyConfig, ToastOptions} from 'ng2-toasty';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import * as _ from 'lodash';

@Component({
  selector: 'draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss']
})

export class DrawComponent implements OnInit {
  MANY_ITEMS = 'MANY_ITEMS';
  subs = new Subscription();
  public list_data: Array<ProjectTask> = [];
  public list_data1: Array<ProjectTask> = [];
  public list_data2: Array<ProjectTask> = [];
  public list_data3: Array<ProjectTask> = [];
  public list_detail: Array<ProjectTask> = [];
  public model: Array<any> = [];
  public groups: Array<any> = [];
  public load : ProjectTask;
  public toastOptions: ToastOptions = {
    title: '',
    msg: '',
    showClose: true,
    timeout: 5000,
    theme: 'material',

  };
  constructor(private dragulaService: DragulaService, private ProjectTaskService: ProjectTaskService, @Inject(DOCUMENT) private _document: any, private toastyService: ToastyService, private toastyConfig: ToastyConfig) {

    this.subs.add(dragulaService.dropModel(this.MANY_ITEMS)
      .subscribe(({ el, target, source, sourceModel, targetModel, item }) => {
        console.log(target);
        var rating = target.getAttribute('id');
        let index = _.findIndex(targetModel, (val) => {
          return val.id == el.getAttribute('id');
        });
        let item_assign = new ProjectTask();
        if (index) {
          if (rating == "idtodo") {
            item_assign = targetModel[index];
            this.ProjectTaskService.ChangeStatus(item_assign).subscribe(() => {
              this.toastOptions.msg = 'Kéo công việc thành công !';
              this.toastyService.success(this.toastOptions);
            }, () => {
              this.toastOptions.msg = 'Kéo công việc không thành công !';
              this.toastyService.warning(this.toastOptions);
            });
          }
          if (rating == "idpro") {
            item_assign = targetModel[index];
            this.ProjectTaskService.ChangeStatusOne(item_assign).subscribe(() => {
              this.toastOptions.msg = 'Kéo công việc thành công!';
              this.toastyService.success(this.toastOptions);
            }, () => {
              this.toastOptions.msg = 'Kéo công việc không thành công!';
              this.toastyService.warning(this.toastOptions);
            });
          }
          if (rating == "idtest") {
            item_assign = targetModel[index];
            this.ProjectTaskService.ChangeStatusTwo(item_assign).subscribe(() => {
              this.toastOptions.msg = 'Kéo công việc thành công!';
              this.toastyService.success(this.toastOptions);
            }, () => {
              this.toastOptions.msg = 'Kéo công việc không thành công!';
              this.toastyService.warning(this.toastOptions);
            });
          }
          if (rating == "iddone") {
            item_assign = targetModel[index];
            this.ProjectTaskService.ChangeStatusThree(item_assign).subscribe(() => {
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
    this.load = new ProjectTask();
  }
  loadList() {
    this.ProjectTaskService.listStatus1().subscribe(data => {
      this.list_data = data.data;
    });
    this.ProjectTaskService.listStatus2().subscribe(data => {
      this.list_data1 = data.data;
    });
    this.ProjectTaskService.listStatus3().subscribe(data => {
      this.list_data2 = data.data;
    });
    this.ProjectTaskService.listStatus4().subscribe(data => {
      this.list_data3 = data.data;
    });
  };
  
 
  showDetail(row,i){
    $(".item-detail").addClass("show");
    $("#box").addClass("box-draw");
    console.log(i);
    this.load.id = row;
    this.load.pStatus = i;
    this.listDetail();
  }
  listDetail() {
    this.ProjectTaskService.listDetail(this.load).subscribe(data => {
        this.list_detail = data.data;
    });
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