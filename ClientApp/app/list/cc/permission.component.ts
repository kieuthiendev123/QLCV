import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import * as Chartist from 'chartist';
import { BsModalComponent, BsModalService } from 'ng2-bs3-modal';
import { Permission, OtherListType, PermissionDetail } from '../../_models';
import { PermissionService } from '../../_services';
declare var $: any;
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';
import { NgForm } from '@angular/forms';
import { DOCUMENT } from '@angular/platform-browser';
import { Injectable, Inject } from '@angular/core';
import { TreeModule, SharedModule } from 'primeng/primeng';

import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';

@Component({
    selector: 'app-list-permission',
    templateUrl: './permission.component.html',
    styleUrls: ['./permission.component.scss']
})
export class PermissionComponent implements OnInit {
    public state_type = 'new';
    public obj_edit: Permission;
    public obj_search: Permission;
    public obj_search2: PermissionDetail;
    public list_data: Array<Permission> = [];
    public list_data2: Array<PermissionDetail> = [];

    dropdownEnabled = true;
    public items: TreeviewItem[] = [];
    values: number[];
    public tree = [];
    public list_tree: Array<any> = [];
    config = TreeviewConfig.create({
        hasAllCheckBox: true,
        hasFilter: false,
        hasCollapseExpand: true,
        decoupleChildFromParent: true,
        maxHeight: 500
    });

    data_2: any[] = [];
    hash = {};

    selectedNodes: any[] = [];

    @ViewChild('modalForm')
    form1: NgForm;
    @ViewChild('modal1')
    modal: BsModalComponent;
    @ViewChild('confirmdeletemodal')
    confirmdeletemodal: BsModalComponent;

    // Toast Option
    public toastOptions: ToastOptions = {
        title: '',
        msg: '',
        showClose: true,
        timeout: 5000,
        theme: 'default'
    };


    constructor(private dataService: PermissionService, @Inject(DOCUMENT) private _document: any, private toastyService: ToastyService) {
        this._document.title = 'Danh mục nhóm phân quyền';
        this.items = this.tree;
    }
    public ngOnInit() {
        this.obj_edit = new Permission();
        this.obj_search = new Permission();
        this.obj_search2 = new PermissionDetail();
        this.loadList();
    }
    ngAfterViewInit() {
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
    buildDataHierarchy(data: any[]): any {
        let id = 1;
        let hash = {};
        let setNodeID = (node: any, parentId: number) => {
            hash[id] = node;
            node['selected'] = false;
            node['nodeId'] = id;
            node['parentNodeId'] = parentId;
            if (node.children.length) {
                const parentId = id;
                node.children.forEach(function (node: any) {
                    id++;
                    setNodeID(node, parentId);
                });
            }
            id++;
        }
        data.forEach(function (node: any) {
            setNodeID(node, 0);
        });
        return hash;
    }
    nodeSelected(toggleNode: any) {
        // select / unselect all children (recursive)
        let toggleChildren = (node: any) => {
            node.children.forEach(function (child: any) {
                child.selected = node.selected;
                if (child.children.length) {
                    toggleChildren(child);
                }
            });
        }
        toggleChildren(toggleNode);

        //update parent if needed (recursive)
        let updateParent = (node: any) => {
            if (node.parentNodeId != 0) {
                const parentNode = this.hash[node.parentNodeId];
                const siblings = parentNode.children;
                parentNode.partialSelection = false;
                let equalSiblings = true;
                siblings.forEach(function (sibling: any) {
                    if (sibling.selected !== node.selected) {
                        equalSiblings = false;
                    }
                });
                if (equalSiblings) {
                    parentNode.selected = node.selected;
                    if (parentNode.parentNodeId != 0) {
                        updateParent(parentNode);
                    }
                } else {
                    parentNode.partialSelection = true;
                }
            }
        }
        updateParent(toggleNode);
        this.updateSelected();
    }

    updateSelected() {
        this.selectedNodes = [];
        for (let node in this.hash) {
            if (this.hash[node].selected) {
                let currentNode = this.hash[node];
                let nodeLabel = currentNode['label'];
                while (currentNode.parentNodeId !== 0) {
                    currentNode = this.hash[currentNode.parentNodeId];
                    nodeLabel = currentNode['label'] + ' > ' + nodeLabel;
                }
                this.selectedNodes.push(nodeLabel);
            }
        }
    }

    onSelectedChange(e: any) {

    }

    onFilterChange(e: any) {

    }
    loadList() {
        this.dataService.list(this.obj_search).subscribe(data => {
            this.list_data = data.data;
            this.loadListDetail();
        });
    }

    loadListDetail() {
        this.dataService.listDetail(this.obj_search2).subscribe(data => {
            this.list_data2 = data.data;
            console.log(this.list_data2);
            this.flatListToTreeViewData(this.list_data2);
        });
    }
    
    addData() {
        this.state_type = 'new';
        this.obj_edit = new Permission();
        // this.load;
        // this.listNcDuocChon;
        // this.listDataUsers();
        // this.list_data_users;
        this.modal.open();
        this.form1.resetForm();

    }

    editData(item: Permission) {
        this.state_type = 'edit';
        this.obj_edit = item;
        // this.load;
        // this.listNcThayThe;
        // console.log(this.load);
        this.modal.open();
    }

    cancelSave() {
        this.state_type = 'new';
        this.obj_search = new Permission();
        this.obj_edit = new Permission();
        this.form1.resetForm();
        this.modal.dismiss();
        this.loadList();
    }

    saveData() {
        if (this.state_type === 'new') {

            console.log(this.obj_edit);
            this.dataService.insert(this.obj_edit).subscribe(() => {
                this.toastOptions.msg = 'Thêm mới dữ liệu thành công!';
                this.toastyService.success(this.toastOptions);
                this.cancelSave();
                this.loadList();
            }, () => {
                this.toastOptions.msg = 'Thêm mới dữ liệu không thành công!';
                this.toastyService.warning(this.toastOptions);
                this.cancelSave();
                this.loadList();
            })



        } else if (this.state_type === 'edit') {

            // this.dataService.update(this.obj_edit).subscribe(() => {
            //     this.toastOptions.msg = 'Sửa dữ liệu thành công!';
            //     this.toastyService.success(this.toastOptions);
            //     this.cancelSave();
            //     this.list();
            // }, () => {
            //     this.toastOptions.msg = 'Sửa dữ liệu không thành công!';
            //     this.toastyService.warning(this.toastOptions);
            //     this.cancelSave();
            //     this.list();
            // })

        }
    }

}
