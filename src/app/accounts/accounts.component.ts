import { Component, OnInit } from '@angular/core';
import { Column, GridOption } from 'angular-slickgrid';
import {AccountsService} from './accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

    columnDefinitions: Column[];
    gridOptions: GridOption;
    dataset: any[];

    public customers: any;
    public partners: any;
    constructor(private accountService: AccountsService) { }

    ngOnInit() {
        this.columnDefinitions = [
            {id: 'name', name: 'Name', field: 'name', sortable: true},
            {id: 'type', name: 'Type', field: 'type',  sortable: true},
            {id: 'partnername', name: 'Partner Name', field: 'partnername', sortable: true},
            {id: 'city', name: 'City', field: 'city',   sortable: true },
            {id: 'state', name: 'State', field: 'state',   sortable: true},
            {id: 'orgid', name: 'Sites', field: 'orgid',  sortable: true }
        ];
        this.gridOptions = {
            enableAutoResize: true,       // true by default
            enableCellNavigation: true,
            enableHeaderMenu: true,
            enableFiltering: true
        };

        this.accountService.getAllCustomers().subscribe(
            (response) => {
                console.log(response);
                this.customers = response.json();
                console.log(this.customers);


                this.passGridData(this.customers);
            },
            (error) => {
                console.log(error);
            }
        );

    }

    _onlyPartners(customers) {
        var customersLength = customers.length;
        var partners = [];
        for (var i = 0; i < customers.length; i++) {
            if (customers[i].type === 'partner' || customers[i].name ==='Sensity Systems') {
                partners.push(customers[i]);
            }
        }
        return partners;
    }


    addPartner(customers) {
        this.partners = this._onlyPartners(customers);
        for (let i = 0; i < this.partners.length; i++) {
            for(let c = 0; c < customers.length; c++) {
               if(customers[c].po === this.partners[i].orgid) {
                   customers[c].partnername = this.partners[i].name;
                   customers[c].type = 'customer';
               }
            }
        }
        return customers;
    }

    passGridData(customers) {
        // fill the dataset with your data
        // VERY IMPORTANT, Angular-Slickgrid uses Slickgrid DataView which REQUIRES a unique "id" and it has to be lowercase "id" and be part of the dataset

        let updatedCustomers = this.addPartner(this.customers);
        console.log(updatedCustomers);


        this.dataset = [];
        let length = updatedCustomers.length;

        for (let i = 0; i < length; i++) {
            this.dataset[i] = {
                id: i, // again VERY IMPORTANT to fill the "id" with unique values
                name: updatedCustomers[i].name,
                type: updatedCustomers[i].type,

                partnername:  updatedCustomers[i].partnername,
                city: updatedCustomers[i].city,
                state: updatedCustomers[i].state,
                sites: updatedCustomers[i].orgid
            };
        }
    }
}
