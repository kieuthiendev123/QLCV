import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import * as Chartist from 'chartist';
import { BsModalComponent, BsModalService } from 'ng2-bs3-modal';
import { PermissionGroup, PerDetail } from '../../_models';
import { PermissionGroupService } from '../../_services';
declare var $: any;
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { NgForm } from '@angular/forms';
import { DOCUMENT } from '@angular/platform-browser';
import { Injectable, Inject } from '@angular/core';
import { Router } from "@angular/router";
// import { isNil, remove, reverse } from 'lodash';
import * as _ from 'lodash';
import {
    TreeviewI18n, TreeviewItem, TreeviewConfig, TreeviewHelper, TreeviewComponent,
    TreeviewEventParser, OrderDownlineTreeviewEventParser, DownlineTreeviewItem
} from 'ngx-treeview';
import { addListener } from 'cluster';

@Component({
    selector: 'app-system-permissiongroupedit',
    templateUrl: './permissiongroupedit.component.html'
})
export class SystemPermissionGroupEditComponent implements OnInit, AfterViewInit {
    @ViewChild(TreeviewComponent) treeviewComponent: TreeviewComponent;
    public list_tree: Array<PermissionGroup> = [];
    public list_data: Array<PermissionGroup> = [];
    public list_data_where: Array<PerDetail> = [];
    nameNq = "";
    arrayQ = [];
    arrcc = [];

    dropdownEnabled = false;
    items = [];
    values: number[];
    rows: string[];
    a: any;

    config = TreeviewConfig.create({
        hasAllCheckBox: true,
        hasFilter: false,
        hasCollapseExpand: false,
        decoupleChildFromParent: false,
        maxHeight: window.innerHeight
    });
    public tree = [];

    constructor(private dataService: PermissionGroupService, @Inject(DOCUMENT) private _document: any, private toastyService: ToastyService, private toastyConfig: ToastyConfig, private route: Router) {
        this._document.title = 'Quản lý nhóm quyền';
        this.toastyConfig.theme = 'material';
        const a = new TreeviewItem({
            text: 'IT', value: 9, children: [
                {
                    text: 'Programming', value: 91, children: [{
                        text: 'Frontend', value: 911, children: [
                            { text: 'Angular 1', value: 9111 },
                            { text: 'Angular 2', value: 9112 },
                            { text: 'ReactJS', value: 9113, disabled: true }
                        ]
                    }, {
                        text: 'Backend', value: 912, children: [
                            { text: 'C#', value: 9121 },
                            { text: 'Java', value: 9122 },
                            { text: 'Python', value: 9123, checked: false, disabled: true }
                        ]
                    }]
                },
                {
                    text: 'Networking', value: 92, children: [
                        { text: 'Internet', value: 921 },
                        { text: 'Security', value: 922 }
                    ]
                }
            ]
        });
        // console.log([a]);
        this.items;
        this.items.push(new TreeviewItem(a));
    }
    public ngOnInit() {
        this.getAllPermission();

        // this.nameNq = this.arrayQ.join();
        console.log(this.list_data);

    }
    ngAfterViewInit() {
    }
    data() {

        // console.log(itCategory);
    }

    onFilterChange(value: string) {
        // console.log('filter:', value);
    }
    onSelectedChange(downlineItems: DownlineTreeviewItem[]) {
        // this.rows = [];
        // downlineItems.forEach(downlineItem => {
        //     const item = downlineItem.item;
        //     const value = item.value;
        //     const texts = [item.text];
        //     let parent = downlineItem.parent;
        //     while (!isNil(parent)) {
        //         texts.push(parent.item.text);
        //         parent = parent.parent;
        //     }
        //     const reverseTexts = reverse(texts);
        //     const row = `${reverseTexts.join(' -> ')} : ${value}`;
        //     this.rows.push(row);
        // });
    }

    removeItem(item: TreeviewItem) {
        // let isRemoved = false;
        // for (const tmpItem of this.items) {
        //     if (tmpItem === item) {
        //         remove(this.items, item);
        //     } else {
        //         isRemoved = TreeviewHelper.removeItem(tmpItem, item);
        //         if (isRemoved) {
        //             break;
        //         }
        //     }
        // }

        // if (isRemoved) {
        //     this.treeviewComponent.raiseSelectedChange();
        // }
    }

    //  lấy dữ liệu bảng permission
    getAllPermission() {
        this.dataService.getAllPermission().subscribe(data => {
            this.list_data = data;
            // console.log(this.list_data);
            for (var a = 0; a < this.list_data.length; a++) {
                var id = this.list_data[a].id;
                this.arrayQ.push(id);
            }
            this.nameNq = this.arrayQ.join();
            this.getAllWhere(this.nameNq);
        });

    }
    getAllWhere(listString) {
        this.dataService.getAllWhere(listString).subscribe(data => {
            this.list_data_where = data;
            this.arrcc = _.dropRightWhile(this.list_data_where,['permissionId'])
            console.log(this.arrcc);
        })
    }
    flatListToTreeViewData(list_tree) {
        this.tree = [];
        var mappedArr = {},
            arrElem,
            mappedElem;

        for (var i = 0, len = list_tree.length; i < len; i++) {
            arrElem = list_tree[i];
            mappedArr[arrElem.id] = arrElem;
            mappedArr[arrElem.id]["children"] = [];
        }

        for (var id in mappedArr) {
            if (mappedArr.hasOwnProperty(id)) {
                mappedElem = mappedArr[id];

                // array of children.
                if (mappedElem.parent) {
                    mappedArr[mappedElem["permissionId"]]["children"].push(mappedElem);
                } else {
                    this.tree.push(mappedElem);
                }
            }
        }
        return this.tree;
    }
}