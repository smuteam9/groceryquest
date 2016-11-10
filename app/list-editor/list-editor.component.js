"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const router_1 = require('@angular/router');
const lists_service_1 = require('./../services/lists.service');
const broadcast_service_1 = require('../services/broadcast.service');
let ListEditorComponent = class ListEditorComponent {
    constructor(route, router, listsService, broadcastService) {
        this.route = route;
        this.router = router;
        this.listsService = listsService;
        this.broadcastService = broadcastService;
    }
    ngOnInit() {
        this.route.params.forEach((params) => {
            this.stores = this.listsService.getStores();
            if (params['list_id'] !== undefined) {
                this.list = this.listsService.getList(+params['list_id']);
                this.newListItems = this.list.items.slice();
                this.title = this.list.store_name.toString();
            }
            else {
                this.list = {
                    items: []
                };
                this.newListItems = [];
                this.title = 'New List';
            }
        });
    }
    save() {
        this.list.items = this.newListItems.slice();
        this.broadcastService.broadcast('saveGroceryList', this.list);
        this.listsService.saveList(this.list);
        this.router.navigate(['../../'], { relativeTo: this.route });
    }
};
ListEditorComponent = __decorate([
    core_1.Component({
        selector: 'list-editor',
        templateUrl: './app/list-editor/list-editor.html',
        styleUrls: ['./app/list-editor/list-editor.css']
    }), 
    __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, lists_service_1.ListsService, broadcast_service_1.BroadcastService])
], ListEditorComponent);
exports.ListEditorComponent = ListEditorComponent;
//# sourceMappingURL=list-editor.component.js.map