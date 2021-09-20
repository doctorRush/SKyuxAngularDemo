
// @Component({
//   selector: 'app-companies',
//   templateUrl: './companies.component.html',
//   styleUrls: ['./companies.component.scss']
// })
// export class CompaniesComponent implements OnInit {
//   companyList:any;
//   headers = ["ID", "Company Name", "Description"];

//   constructor(private http:HttpClient){}
//   ngOnInit(){
//     this.http.get('http://localhost:3000/companies').subscribe((res)=>{
//     this.companyList=res;
//     })
//     }

// }
import {
  Component,
  OnInit
} from '@angular/core';

import {
  GridApi,
  GridReadyEvent,
  GridOptions,
} from 'ag-grid-community';

import {
  SkyCellType,
  SkyAgGridService
} from '@skyux/ag-grid';

// import {
//   SkyModalService,
//   SkyModalCloseArgs
// } from '@skyux/modals';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  
  public gridData:any[];
  public columnDefs = [
    // {
    //   field: 'selected',
    //   type: SkyCellType.RowSelector
    // },
    // {
    //   colId: 'context',
    //   headerName: '',
    //   maxWidth: 50,
    //   sortable: false,
    //   cellRendererFramework: SkyDataEntryGridContextMenuComponent
    // },
    {
      field: 'id',
      headerName: 'Company ID'
    },
    {
      field: 'name',
      headerName: 'Company Name',
    
    },
    {
      field: 'description',
      headerName: 'Description',
      
    },

  ];

  public gridApi: GridApi;
  public gridOptions: GridOptions;
  public searchText: string;

  constructor(
    private agGridService: SkyAgGridService,
    
    private http:HttpClient
  ) { }

  public ngOnInit(): void {
    this.http.get('http://localhost:3000/companies').subscribe((res:any[])=>{
    this.gridData=res;
     })
    this.gridOptions = {
      columnDefs: this.columnDefs,
      suppressRowTransform: true,
      onGridReady: gridReadyEvent => this.onGridReady(gridReadyEvent)
    };
    this.gridOptions = this.agGridService.getGridOptions({ gridOptions: this.gridOptions });
  }

  public onGridReady(gridReadyEvent: GridReadyEvent): void {
    this.gridApi = gridReadyEvent.api;

    this.gridApi.sizeColumnsToFit();
  }

  // public openModal(): void {
  //   const context = new SkyDataEntryGridEditModalContext();
  //   context.gridData = this.gridData;

  //   const options = {
  //     providers: [{ provide: SkyDataEntryGridEditModalContext, useValue: context }],
  //     ariaDescribedBy: 'docs-edit-grid-modal-content',
  //     size: 'large'
  //   };

  //   const modalInstance = this.modalService.open(SkyDataEntryGridEditModalComponent, options);

  //   modalInstance.closed.subscribe((result: SkyModalCloseArgs) => {
  //     if (result.reason === 'cancel' || result.reason === 'close') {
  //       alert('Edits canceled!');
  //     } else {
  //       this.gridData = result.data;
  //       this.gridApi.refreshCells();
  //       alert('Saving data!');
  //     }
  //   });
  // }

  public searchApplied(searchText: string): void {
    this.searchText = searchText;
    this.gridApi.setQuickFilter(searchText);
  }

  // private endDateFormatter(params: ValueFormatterParams): string {
  //   const dateConfig = { year: 'numeric', month: '2-digit', day: '2-digit' };
  //   return params.value ? params.value.toLocaleDateString('en-us', dateConfig) : 'N/A';
  // }
}